
import axios from 'axios';

export async function getUserBookings() {
  try {
    const response = await axios.get('/api/user', {
      params: { endpoint: 'bookings' },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user bookings:', error);
    return [];
  }
}
