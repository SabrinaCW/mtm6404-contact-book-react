// src/Components/ContactDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db, doc, getDoc, deleteDoc } from '../db';

function ContactDetail() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      const contactDoc = doc(db, 'contacts', id);
      const contactSnap = await getDoc(contactDoc);
      if (contactSnap.exists()) {
        setContact(contactSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchContact();
  }, [id]);

  const handleDelete = async () => {
    await deleteDoc(doc(db, 'contacts', id));
    window.location.href = '/';
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>Contact Details</h1>
      <p>Name: {contact.firstName} {contact.lastName}</p>
      <p>Email: {contact.email}</p>
      <Link to={`/edit/${id}`}>Edit Contact</Link>
      <button onClick={handleDelete}>Delete Contact</button>
      <Link to="/" className="back-link">Back to List</Link>
    </div>
  );
}

export default ContactDetail;
