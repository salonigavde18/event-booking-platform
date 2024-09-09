// components/ConfirmBookingButton.tsx

import React from 'react';
import { Button } from '@/components/ui/button';

interface ConfirmBookingButtonProps {
  onConfirm: () => void;
  
}

export function ConfirmBookingButton({ onConfirm }: ConfirmBookingButtonProps) {
  return (
    <div className="flex justify-center">
      <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700" onClick={onConfirm}>
        Confirm Booking
      </Button>
    </div>
  );
}
