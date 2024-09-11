"use client"
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Reports() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Reports & Analytics</h2>
      <Card className="p-6">
        <h3 className="text-lg font-semibold">Event Performance</h3>
        {/* Insert charts or tables displaying performance metrics */}
      </Card>

      <Card className="p-6 mt-4">
        <h3 className="text-lg font-semibold">Revenue Reports</h3>
        {/* Insert charts or tables displaying revenue metrics */}
      </Card>

      <Button className="mt-6">Export Reports (CSV)</Button>
    </div>
  );
}
