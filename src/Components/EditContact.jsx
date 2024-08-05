import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { db, doc, getDocs, updateDoc } from '../db';

function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({ firstName: '', lastName: '', email: '' });

  useEffect(() => {
    const fetchContact = async () => {
      const contactDoc = doc(db, 'contacts', id);
      const contactSnap = await getDocs(contactDoc);
      setContact(contactSnap.data());
    };
    fetchContact();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactDoc = doc(db, 'contacts', id);
    await updateDoc(contactDoc, contact);
    navigate(`/contact/${id}`);
  };

  return (
    <div className="container">
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input 
            type="text" 
            value={contact.firstName} 
            onChange={(e) => setContact({ ...contact, firstName: e.target.value })} 
            required 
          />
        </label>
        <label>
          Last Name:
          <input 
            type="text" 
            value={contact.lastName} 
            onChange={(e) => setContact({ ...contact, lastName: e.target.value })} 
            required 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            value={contact.email} 
            onChange={(e) => setContact({ ...contact, email: e.target.value })} 
            required 
          />
        </label>
        <button type="submit">Update Contact</button>
      </form>
      <Link to={`/contact/${id}`} className="back-link">Back to Details</Link>
    </div>
  );
}

export default EditContact;
