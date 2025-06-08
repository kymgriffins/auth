import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../apis/apiCalls';
import type { UsersResponse, User } from '../../types/index';

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('No token found. Please login.');
      setLoading(false);
      return;
    }

    fetchUsers({
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        const data = response.data as UsersResponse;
        setUsers(data.users);
      })
      .catch((err) => {
        setError('Failed to fetch users.');
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-8">Loading users...</p>;
  }

  if (error) {
    return <p className="text-center mt-8 text-red-500">{error}</p>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
  <h1 className="text-3xl font-bold mb-8 text-center">All Users</h1>

  {users.length ? (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-2xl shadow hover:shadow-md p-6 transition space-y-3"
        >
          <div className="flex flex-col items-center">
            <img
              src={user.image}
              alt={`${user.firstName} avatar`}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 mb-4"
            />
            <h2 className="text-lg font-semibold">
              {user.firstName} {user.lastName} ({user.username})
            </h2>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-500">{user.phone}</p>
          </div>

          <div className="text-sm space-y-1">
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Birth Date:</strong> {user.birthDate}</p>
            <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
            <p><strong>Height:</strong> {user.height} cm</p>
            <p><strong>Weight:</strong> {user.weight} kg</p>
            <p><strong>Eye Color:</strong> {user.eyeColor}</p>
            <p><strong>Hair:</strong> {user.hair.color}, {user.hair.type}</p>
          </div>

          <div className="text-sm space-y-1">
            <p><strong>Address:</strong> {user.address.address}, {user.address.city}, {user.address.state}, {user.address.country}</p>
            <p><strong>Coordinates:</strong> {user.address.coordinates.lat}, {user.address.coordinates.lng}</p>
            <p><strong>IP:</strong> {user.ip}</p>
            <p><strong>MAC:</strong> {user.macAddress}</p>
          </div>

          <div className="text-sm space-y-1">
            <p><strong>University:</strong> {user.university}</p>
            <p><strong>Company:</strong> {user.company?.title} at {user.company?.name}</p>
            <p><strong>Company Address:</strong> {user.company?.address?.address}, {user.company?.address?.city}</p>
          </div>

          <div className="text-sm space-y-1">
            <p><strong>Bank:</strong> {user.bank.cardType} •••• {user.bank.cardNumber.slice(-4)}</p>
            <p><strong>Expires:</strong> {user.bank.cardExpire}</p>
            <p><strong>IBAN:</strong> {user.bank.iban}</p>
          </div>

          <div className="text-sm space-y-1">
            <p><strong>Crypto:</strong> {user.crypto.coin} on {user.crypto.network}</p>
            <p><strong>Wallet:</strong> {user.crypto.wallet}</p>
          </div>

          <div className="text-sm space-y-1">
            <p><strong>EIN:</strong> {user.ein}</p>
            <p><strong>SSN:</strong> {user.ssn}</p>
            <p><strong>User Agent:</strong> {user.userAgent}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500">No users found.</p>
  )}
</div>

  );
};

export default Users;
