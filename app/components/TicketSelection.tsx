// TicketSelection.tsx
import React from 'react';

export interface TicketType {
  type: string;
  price: number;
  quantity: number; 
}

interface TicketSelectionProps {
  ticketTypes: TicketType[];
  onTicketSelect: (ticket: TicketType) => void;
}

const TicketSelection: React.FC<TicketSelectionProps> = ({ ticketTypes, onTicketSelect }) => {
  return (
    <div>
      {ticketTypes.map((ticket) => (
        <button
          key={ticket.type}
          onClick={() => onTicketSelect(ticket)}
          className="block w-full p-4 mb-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {ticket.type} - ${ticket.price}
        </button>
      ))}
    </div>
  );
};

export default TicketSelection;
