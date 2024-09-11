"use client";
import React, { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { signUpUser, signInWithGoogle, signInWithFacebook } from '../../api/auth'; // Assume these functions exist
import SignupForm from '@/components/auth/signup-form';

const SignUpPage: React.FC = () => {
  const handleSignUp = async (name: string, email: string, password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    await signUpUser(name, email, password);
    // Handle post-sign-up actions, e.g., redirect or display a message
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <SignupForm onSubmit={handleSignUp} />
        <div className="mt-4 text-center">
          <Button onClick={signInWithGoogle} className="w-full bg-red-500 text-white">
            Sign Up with Google
          </Button>
          <Button onClick={signInWithFacebook} className="w-full bg-blue-600 text-white mt-2">
            Sign Up with Facebook
          </Button>
          <a href="/login" className="block mt-4 text-blue-600 text-center">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
