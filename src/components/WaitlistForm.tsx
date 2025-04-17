"use client";

import { useState } from 'react';

interface WaitlistFormProps {
  type: string;
}

export default function WaitlistForm({ type }: WaitlistFormProps) {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic
  };

  return (
    <div className="max-w-md p-6 mx-auto bg-white shadow-lg rounded-xl dark:bg-gray-800">
      <h3 className="mb-4 text-2xl font-bold">{type} Waitlist</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border rounded dark:bg-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-3 text-white transition bg-blue-600 rounded hover:bg-blue-700"
        >
          Join Waitlist
        </button>
      </form>
    </div>
  );
}