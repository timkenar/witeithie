import React, { useState } from 'react';
import api from '../services/api';

const SellerDashboard = ({ authToken }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
  });

  const [service, setService] = useState({
    title: '',
    description: '',
    price: '',
  });

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleServiceChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleProductImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const submitProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    if (product.image) formData.append('image', product.image);

    try {
      await api.post('/products/', formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Product added successfully!');
    } catch (err) {
      console.error('Error adding product:', err);
    }
  };

  const submitService = async (e) => {
    e.preventDefault();
    try {
      await api.post('/services/', service, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      alert('Service added successfully!');
    } catch (err) {
      console.error('Error adding service:', err);
    }
  };

  return (
    <div>
      <h2>Seller Dashboard</h2>
      <div>
        <h3>Add a Product</h3>
        <form onSubmit={submitProduct}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleProductChange}
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={product.description}
            onChange={handleProductChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Product Price"
            value={product.price}
            onChange={handleProductChange}
          />
          <input type="file" onChange={handleProductImageChange} />
          <button type="submit">Add Product</button>
        </form>
      </div>
      <div>
        <h3>Add a Service</h3>
        <form onSubmit={submitService}>
          <input
            type="text"
            name="title"
            placeholder="Service Title"
            value={service.title}
            onChange={handleServiceChange}
          />
          <textarea
            name="description"
            placeholder="Service Description"
            value={service.description}
            onChange={handleServiceChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Service Price"
            value={service.price}
            onChange={handleServiceChange}
          />
          <button type="submit">Add Service</button>
        </form>
      </div>
    </div>
  );
};

export default SellerDashboard;
