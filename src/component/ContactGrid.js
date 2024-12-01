import React from 'react';
import '../styles/styles.css';  

const ContactGrid = ({ contact }) => {
  return (
    <>
      <td>{contact.firstName} {contact.lastName}</td>
      <td>{contact.dateOfBirth}</td>
      <td>{contact.streetAddress}</td>
      <td>{contact.city}</td>
      <td>{contact.state}</td>
      <td>{contact.zipCode}</td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
    </>
  );
};

export default ContactGrid;
