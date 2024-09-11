// /app/auth/forgot-password/page.tsx
"use client";
import React from 'react';
import ForgotPasswordForm from '@/components/auth/forgot-password-form';
import { sendPasswordResetEmail } from '../../api/auth'; 

const PasswordRecoveryPage: React.FC = () => {
  const handlePasswordRecovery = async (email: string) => {
    await sendPasswordResetEmail(email);
    alert('Password reset instructions sent to your email.');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Password Recovery</h2>
        <ForgotPasswordForm onSubmit={handlePasswordRecovery} />
      </div>
    </div>
  );
};

export default PasswordRecoveryPage;
