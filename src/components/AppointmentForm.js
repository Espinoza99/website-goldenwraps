


import '../styles.css'

// components/AppointmentForm.js

import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    // Add more form fields as needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://your-backend-api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('Appointment booked successfully!');
      } else {
        // Handle errors (e.g., show an error message)
        console.error('Failed to book appointment');
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add form fields for appointment details */}
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

      <label htmlFor="time">Time:</label>
      <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />

      {/* Add more form fields as needed */}
      
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;

