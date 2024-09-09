import React from 'react';

interface OrderSummaryProps {
  selectedTicket: {
    type: string;
    price: number;
    quantity: number;
  };
  totalAmount: number;
  tax: number;
  discount: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  selectedTicket,
  totalAmount,
  tax,
  discount,
  total,
}) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-gray-700">Ticket Type:</p>
          <p className="text-lg font-semibold text-gray-900">{selectedTicket.type}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-gray-700">Price per Ticket:</p>
          <p className="text-lg font-semibold text-gray-900">${selectedTicket.price}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-gray-700">Quantity:</p>
          <p className="text-lg font-semibold text-gray-900">{selectedTicket.quantity}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-gray-700">Subtotal:</p>
          <p className="text-lg font-semibold text-gray-900">${totalAmount}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-gray-700">Tax:</p>
          <p className="text-lg font-semibold text-gray-900">${tax}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-gray-700">Discount:</p>
          <p className="text-lg font-semibold text-gray-900">${discount}</p>
        </div>
        <div className="flex justify-between items-center border-t pt-4">
          <p className="text-lg font-semibold text-gray-900">Total:</p>
          <p className="text-lg font-bold text-gray-900">${total}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
