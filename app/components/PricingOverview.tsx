// components/PricingOverview.tsx
import React from 'react';

interface PricingOverviewProps {
  selectedTicket: {
    type: string;
    price: number;
    quantity: number;
  };
}

const PricingOverview: React.FC<PricingOverviewProps> = ({ selectedTicket }) => {
  const totalPrice = selectedTicket.price * selectedTicket.quantity;

  return (
    <div className="my-4 border p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Pricing Overview</h3>
      <p>{selectedTicket.type} - ${selectedTicket.price} x {selectedTicket.quantity}</p>
      <p className="font-bold">Total: ${totalPrice}</p>
    </div>
  );
};

export default PricingOverview;
