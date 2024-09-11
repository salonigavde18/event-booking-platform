// /components/auth/login-form.tsx
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password); // Call the onSubmit prop with email and password
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <Input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
