// /components/auth/signup-form.tsx
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface SignupFormProps {
  onSubmit: (name: string, email: string, password: string, confirmPassword: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, email, password, confirmPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name"
        required
      />
      <Input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email"
        required
      />
      <Input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password"
        required
      />
      <Input 
        type="password" 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        placeholder="Confirm Password"
        required
      />
      <Button type="submit" className="w-full">Sign Up</Button>
    </form>
  );
};

export default SignupForm;
