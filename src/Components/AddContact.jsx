import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { db, collection, addDoc } from '../db'; // Ensure this path is correct

function AddContact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting form', { firstName, lastName, email });
      await addDoc(collection(db, 'contacts'), { firstName, lastName, email });
      console.log('Document successfully written!');
      navigate('/');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="container">
      <h1>Add New Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Add Contact</button>
      </form>
      <Link to="/" className="back-link">Back to List</Link>
    </div>
  );
}

export default AddContact;
