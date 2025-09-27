import { createServer } from 'http';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3001;
const audioDir = path.join(__dirname, 'audio');

// Ensure audio directory exists
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
  console.log('✅ Created audio directory:', audioDir);
}

const server = createServer((req, res) => {
  const url = req.url || '';
  console.log(`📨 Received ${req.method} request for: ${url}`);
  
  // Enable CORS - Allow all origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, Accept');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    console.log('✅ Handling preflight request');
    res.writeHead(200);
    res.end();
    return;
  }
  
  // Handle POST requests to /synthesize
  if (req.method === 'POST' && url === '/synthesize') {
    console.log('🎵 Processing synthesis request');
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const { text, language = 'ne', speed = 100, pitch = 50 } = JSON.parse(body);
        console.log('📝 Text to synthesize:', text);
        
        if (!text) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Text is required' }));
          return;
        }
        
        const filename = `tts_${Date.now()}.wav`;
        const filepath = path.join(audioDir, filename);
        
        // Use a simpler command approach for Windows
        const command = `espeak-ng -v ${language} -s ${speed} -p ${pitch} -w "${filepath}" "${text}"`;
        console.log('🔧 Executing command:', command);
        
        exec(command, { encoding: 'utf8' }, (error, stdout, stderr) => {
          if (error) {
            console.error('❌ eSpeak error:', error);
            console.error('❌ Stderr:', stderr);
            
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 
              error: 'Failed to generate speech',
              details: stderr || error.message
            }));
            return;
          }
          
          // Check if file was created with a small delay
          setTimeout(() => {
            if (!fs.existsSync(filepath)) {
              console.error('❌ Audio file was not created');
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Audio file was not created' }));
              return;
            }
            
            console.log('✅ Audio file created successfully:', filename);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 
              success: true, 
              audioUrl: `http://localhost:${port}/audio/${filename}` 
            }));
          }, 300);
        });
      } catch (error) {
        console.error('❌ JSON parse error:', error);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
    return; // Important: return after handling the request
  }
  
  // Serve audio files
  if (req.method === 'GET' && url.startsWith('/audio/')) {
    const filename = url.split('/audio/')[1];
    const filepath = path.join(audioDir, filename);
    console.log('🔊 Serving audio file:', filename);
    
    if (fs.existsSync(filepath)) {
      const stat = fs.statSync(filepath);
      res.writeHead(200, {
        'Content-Type': 'audio/wav',
        'Content-Length': stat.size,
        'Cache-Control': 'no-cache'
      });
      
      const readStream = fs.createReadStream(filepath);
      readStream.pipe(res);
    } else {
      console.error('❌ Audio file not found:', filename);
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'File not found' }));
    }
    return;
  }
  
  // Health check endpoint
  if (req.method === 'GET' && url === '/health') {
    console.log('❤️ Health check requested');
    exec('espeak-ng --version', (error) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        status: 'OK',
        espeakAvailable: !error,
        message: !error ? 'eSpeak NG is available' : 'eSpeak NG is not available'
      }));
    });
    return;
  }
  
  // Handle common browser requests gracefully
  if (req.method === 'GET') {
    if (url === '/favicon.ico') {
      console.log('ℹ️ Ignoring favicon request');
      res.writeHead(204); // No content
      res.end();
      return;
    }
    
    if (url === '/robots.txt') {
      console.log('ℹ️ Serving robots.txt');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('User-agent: *\nDisallow:');
      return;
    }
  }
  
  // For all other routes, return a simple 404
  console.log('❌ Route not found, but responding gracefully:', url);
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ 
    error: 'Not found',
    message: 'This is the eSpeak API server. Available endpoints: /synthesize (POST), /health (GET), /audio/* (GET)'
  }));
});

// Handle server errors
server.on('error', (error) => {
  console.error('❌ Server error:', error);
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please kill the process using this port or use a different port.`);
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`✅ eSpeak API server running on http://localhost:${port}`);
  console.log(`✅ Health check: http://localhost:${port}/health`);
  console.log(`✅ Server is listening on all network interfaces`);
  console.log(`✅ Audio directory: ${audioDir}`);
  
  // Check if eSpeak is available
  exec('espeak-ng --version', (error) => {
    if (error) {
      console.log('❌ eSpeak NG is not available. Please install it and add to PATH.');
    } else {
      console.log('✅ eSpeak NG is available');
    }
  });
});

// Cleanup old audio files every hour
setInterval(() => {
  if (!fs.existsSync(audioDir)) return;
  
  fs.readdir(audioDir, (err, files) => {
    if (err) return;
    
    const now = Date.now();
    files.forEach(file => {
      const filePath = path.join(audioDir, file);
      try {
        const stat = fs.statSync(filePath);
        if (now - stat.mtimeMs > 3600000) {
          fs.unlinkSync(filePath);
          console.log('🗑️ Cleaned up old file:', file);
        }
      } catch (e) {
        console.error('Error cleaning up file:', e);
      }
    });
  });
}, 3600000);

console.log('🚀 Server starting...');