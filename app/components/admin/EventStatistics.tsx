"use client"
import { Card } from '@/components/ui/card';

import React from 'react';

interface EventStatisticsProps {
  stats: any; // Adjust the type based on your actual stats structure
}

const EventStatistics: React.FC<EventStatisticsProps> = ({ stats }) => {
  return (
    <div>
      <h2>Event Statistics</h2>
      {/* Render stats here */}
      <pre>{JSON.stringify(stats, null, 2)}</pre>
    </div>
  );
};

export default EventStatistics;
