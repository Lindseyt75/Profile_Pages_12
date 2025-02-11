import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Valid email is required";
    if (!formData.message) errors.message = "Message is required";
    setFormErrors(errors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section id="contact" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '500px', width: '100%' }}>
        <h2 style={{ textAlign: 'center' }}>Contact</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
            {formErrors.name && <p style={{ color: 'red' }}>{formErrors.name}</p>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
            {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
                minHeight: '150px',
              }}
            />
            {formErrors.message && <p style={{ color: 'red' }}>{formErrors.message}</p>}
          </div>
          <button
            type="submit"
            style={{
              width: '100%', // Stretch the button to match input width
              padding: '10px',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: 'lightgrey', // Adding a background color for style
              color: 'black',
              border: 'none',
              margin: '0 auto', // Center the button
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
