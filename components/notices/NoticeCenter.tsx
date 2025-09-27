// // components/notices/NoticeCenter.tsx
// "use client"

// import { useEffect, useState } from "react"
// import { useSession } from "next-auth/react"

// interface Notice {
//   id: string
//   title: string
//   content: string
//   sender: string
//   createdAt: Date
//   isImportant: boolean
// }

// export default function NoticeCenter() {
//   const [notices, setNotices] = useState<Notice[]>([])
//   const { data: session } = useSession()

//   useEffect(() => {
//     // Fetch notices from API
//     const fetchNotices = async () => {
//       try {
//         const response = await fetch('/api/notices')
//         const data = await response.json()
//         setNotices(data)
//       } catch (error) {
//         console.error('Failed to fetch notices:', error)
//       }
//     }

//     fetchNotices()
    
//     // Set up real-time updates with WebSocket or SSE
//     const eventSource = new EventSource('/api/notices/stream')
//     eventSource.onmessage = (event) => {
//       const newNotice = JSON.parse(event.data)
//       setNotices(prev => [newNotice, ...prev])
//     }

//     return () => eventSource.close()
//   }, [])

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Notice Center</h1>
      
//       {session?.user?.role === 'admin' && (
//         <div className="mb-6">
//           <button className="bg-primary text-white px-4 py-2 rounded">
//             Create New Notice
//           </button>
//         </div>
//       )}
      
//       <div className="space-y-4">
//         {notices.map(notice => (
//           <div key={notice.id} className="border rounded-lg p-4">
//             <h2 className="text-xl font-semibold">{notice.title}</h2>
//             <p className="text-sm text-gray-500">
//               By {notice.sender} • {new Date(notice.createdAt).toLocaleDateString()}
//             </p>
//             <p className="mt-2">{notice.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }