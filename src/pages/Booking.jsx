import React, { useState } from 'react';
import api from '../services/api';

const Booking = ({ authToken }) => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        '/rides/book/',
        { pickup, destination, date },
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      setMessage('Booking successful!');
    } catch (err) {
      setMessage('Booking failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Book a Ride</h2>
      <form onSubmit={handleBooking}>
        <input
          type="text"
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Book Ride</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Booking;
