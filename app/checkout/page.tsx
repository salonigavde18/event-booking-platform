"use client";

import { useSearchParams } from 'next/navigation'; 
import React, { useState, useEffect } from 'react';
import { BookingSummary } from '../components/BookingSummary'; 
import { ConfirmBookingButton } from '../components/ConfirmBooking';
import { UserInformationForm } from '../components/UserInformationForm';
import { PaymentForm } from '../components/PaymentForm';
import OrderSummary from '../components/OrderSummary'; 
import { TicketType } from '../components/TicketSelection';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('eventId');
  const ticketType = searchParams.get('ticketType');
  const quantity = searchParams.get('quantity');

  const [selectedTicket, setSelectedTicket] = useState<TicketType | null>(null);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (ticketType && quantity) {
      const price = ticketType === 'VIP' ? 100 : 50;
      setSelectedTicket({
        type: ticketType,
        price,
        quantity: parseInt(quantity, 10),
      });
    }
  }, [ticketType, quantity]);

  const handleUserInfoSubmit = (info: { name: string; email: string; phone: string }) => {
    setUserInfo(info);
    console.log('User Info:', info);
    console.log('Selected Ticket:', selectedTicket);
  };

  const handleConfirmBooking = () => {
    console.log('Booking Confirmed');
  };

  if (!selectedTicket) {
    return <div className="container mx-auto py-8">Loading...</div>;
  }

  const totalAmount = selectedTicket.price * selectedTicket.quantity;
  const tax = 10; // Example tax amount
  const discount = 5; // Example discount

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-800">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          
          <BookingSummary selectedTicket={selectedTicket} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          
          <UserInformationForm onSubmit={handleUserInfoSubmit} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          
          <PaymentForm />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <OrderSummary
            selectedTicket={selectedTicket}
            totalAmount={totalAmount}
            tax={tax}
            discount={discount}
            total={totalAmount + tax - discount}
          />
        </div>
      </div>

      <div className="text-center">
        <ConfirmBookingButton onConfirm={handleConfirmBooking} />
      </div>
    </div>
  );
}
