"use client"
import { Table } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

export default function UserManagement({ users }: { users: any[] }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Button>Edit Role</Button>
                <Button className="bg-red-500">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
