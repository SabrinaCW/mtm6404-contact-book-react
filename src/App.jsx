import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './Components/ContactList';
import ContactDetail from './Components/ContactDetail';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </Router>
  );
}

export default App;
