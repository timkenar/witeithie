import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ServiceRequest = ({ authToken }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get('/services/', {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        setServices(response.data);
      } catch (err) {
        console.error('Error fetching services:', err);
      }
    };

    fetchServices();
  }, [authToken]);

  const bookService = async (serviceId) => {
    try {
      await api.post(
        `/services/${serviceId}/book/`,
        {},
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      alert('Service booked successfully!');
    } catch (err) {
      console.error('Error booking service:', err);
    }
  };

  return (
    <div>
      <h2>Available Services</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {services.map((service) => (
          <div key={service.id} style={{ border: '1px solid #ddd', padding: '20px' }}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p>Price: ${service.price}</p>
            <button onClick={() => bookService(service.id)}>Book Service</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceRequest;
