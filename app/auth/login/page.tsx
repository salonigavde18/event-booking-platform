// /app/auth/login/page.tsx
"use client";
import React from 'react';
import LoginForm from '@/components/auth/login-form';
import { Button } from '@/components/ui/button';
import { signInWithGoogle, signInWithFacebook, loginUser } from '../../api/auth'; // Adjust path as needed

const LoginPage: React.FC = () => {
  const handleLogin = async (email: string, password: string) => {
    await loginUser(email, password);
    // Handle post-login actions, e.g., redirect or display a message
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <LoginForm onSubmit={handleLogin} />
        <div className="mt-4 text-center">
          <Button onClick={signInWithGoogle} className="w-full bg-red-500 text-white">
            Login with Google
          </Button>
          <Button onClick={signInWithFacebook} className="w-full bg-blue-600 text-white mt-2">
            Login with Facebook
          </Button>
          <a href="/forgot-password" className="block mt-4 text-blue-600">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
