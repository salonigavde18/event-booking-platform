// components/PaymentForm.tsx

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function PaymentForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Integrate with payment gateway (e.g., Stripe) here
    console.log('Processing payment...');
  };

  return (
    <form onSubmit={handlePayment} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Payment Information</h2>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div className="mb-4 flex gap-4">
        <Input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <Input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
      </div>
      <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700">
        Pay Now
      </Button>
    </form>
  );
}
