
import React from 'react';

interface Ticket {
  type: string;
  price: number;
  quantity: number;
}

interface BookingSummaryProps {
  selectedTicket: Ticket;
}

export function BookingSummary({ selectedTicket }: BookingSummaryProps) {
  const { type, price, quantity } = selectedTicket;
  const totalPrice = price * quantity;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Ticket Type:</span>
        <span>{type}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Price:</span>
        <span>${price.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Quantity:</span>
        <span>{quantity}</span>
      </div>
      <div className="flex justify-between font-bold mt-4">
        <span>Total Price:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}
