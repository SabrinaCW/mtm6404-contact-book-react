import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db, collection, getDocs } from '../db';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      const contactsCollection = collection(db, 'contacts');
      const contactSnapshot = await getDocs(contactsCollection);
      const contactList = contactSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setContacts(contactList);
    };
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(contact => 
    contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(search.toLowerCase())
  ).sort((a, b) => a.lastName.localeCompare(b.lastName));

  return (
    <div className="container">
      <h1>Contact List</h1>
      <input 
        type="text" 
        placeholder="Search..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        className="search"
      />
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add New Contact</Link>
    </div>
  );
}

export default ContactList;