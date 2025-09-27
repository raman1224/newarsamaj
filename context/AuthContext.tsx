'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';
import { account, OAuthProvider } from '@/lib/appwrite-client';
import { Models } from 'appwrite';
interface AuthContextType {
  user: Models.User<Models.Preferences> | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  googleLogin: () => Promise<void>;
  facebookLogin: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const user = await account.get();
      setUser(user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    await account.createEmailPasswordSession(email, password);
    const user = await account.get();
    setUser(user);
  };

  const signup = async (email: string, password: string, name: string) => {
    await account.create('unique()', email, password, name);
    await login(email, password);
  };

  const logout = async () => {
    await account.deleteSession('current');
    setUser(null);
  };

  const googleLogin = async () => {
    account.createOAuth2Session(
      OAuthProvider.Google,
      `${window.location.origin}/auth/success`,
      `${window.location.origin}/auth/login`
    );
  };

  const facebookLogin = async () => {
    account.createOAuth2Session(
      OAuthProvider.Facebook,
      `${window.location.origin}/auth/success`,
      `${window.location.origin}/auth/login`
    );
  };

  const resetPassword = async (email: string) => {
    await account.createRecovery(email, `${window.location.origin}/auth/reset-password`);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      signup,
      logout,
      googleLogin,
      facebookLogin,
      resetPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}