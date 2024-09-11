// /components/auth/forgot-password-form.tsx
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { sendPasswordResetEmail } from '@/api/auth'; // Adjust path as needed

interface ForgotPasswordFormProps {
  onSubmit: (email: string) => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email"
        required
      />
      <Button type="submit" className="w-full">Send Password Reset Link</Button>
    </form>
  );
};

export default ForgotPasswordForm;
