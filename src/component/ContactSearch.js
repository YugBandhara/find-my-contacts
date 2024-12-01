import React, { useState, useEffect } from 'react';
import { paginateContacts } from '../utils/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactCard from './ContactCard'; // Import the ContactCard component
import { contactsData } from '../utils/SampleData';
import '../styles/styles.css';

const ContactSearch = () => {
    const [searchFirstName, setSearchFirstName] = useState('');
    const [searchLastName, setSearchLastName] = useState('');
    const [searchDateOfBirth, setSearchDateOfBirth] = useState('');
    const [searchEmail, setSearchEmail] = useState('');
    const [searchPhoneNumber, setSearchPhoneNumber] = useState('');
    const [searchStreetAddress, setSearchStreetAddress] = useState('');
    const [searchCity, setSearchCity] = useState('');
    const [searchState, setSearchState] = useState('');
    const [searchZipCode, setSearchZipCode] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(contactsData);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const [selectedContact, setSelectedContact] = useState(null);
    const [showToast, setShowToast] = useState(false);

    const handleContactSelection = (e, contact) => {
        if (e.target.checked) {
            setSelectedContact(contact);
        } else {
            setSelectedContact(null);
        }
    };


    const handleSearch = () => {
        if (!searchLastName.trim()) {
            setShowToast(true); // Show the toast message
            return;
        }

        const filtered = contactsData.filter(contact =>
            contact.firstName.toLowerCase().includes(searchFirstName.toLowerCase()) &&
            contact.lastName.toLowerCase().includes(searchLastName.toLowerCase()) &&
            contact.dateOfBirth.includes(searchDateOfBirth) &&
            contact.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
            contact.phoneNumber.toLowerCase().includes(searchPhoneNumber.toLowerCase()) &&
            contact.streetAddress.toLowerCase().includes(searchStreetAddress.toLowerCase()) &&
            contact.city.toLowerCase().includes(searchCity.toLowerCase()) &&
            contact.state.toLowerCase().includes(searchState.toLowerCase()) &&
            contact.zipCode.toLowerCase().includes(searchZipCode.toLowerCase())
        );
        console.log(filtered, "filtered")
        setFilteredContacts(filtered);
        setCurrentPage(1);
    };
    useEffect(() => {
        if (selectedContact && !filteredContacts.find(contact => contact.id === selectedContact.id)) {
            setSelectedContact(null);
        }
    }, [filteredContacts, selectedContact]);
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 1000); // Toast will disappear after 3 seconds
    
            // Cleanup the timeout
            return () => clearTimeout(timer);
        }
    }, [showToast]);
    


    const { currentContacts, totalPages } = paginateContacts(filteredContacts, currentPage, itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const renderSelectedContact = () => {
        if (!selectedContact) return <p>No contact selected.</p>;

        const { firstName, lastName, email, phoneNumber, streetAddress, city, state, zipCode } = selectedContact;
        console.log(selectedContact, "contatctt")

        return (
            <div className="card p-3">
                <h5>Selected Contact</h5>
                <p><strong>Name:</strong> {firstName} {lastName}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phoneNumber}</p>
                <p><strong>Address:</strong> {streetAddress}, {city}, {state} {zipCode}</p>
            </div>
        );
    };

    return (

        <div className="container mt-5">
            <div>
                <strong className='title'>Choose a contact</strong>
            </div>
            <div className='m-3'>
                <div className='mb-3'>
                    <strong >Search for a contact</strong>
                </div>

                <div className="d-flex row mb-4">
                    {/* Left side */}
                    <div className="col-md-8 pr-0">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="form-control"
                                        value={searchFirstName}
                                        onChange={(e) => setSearchFirstName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group mb-3">
                                    <label htmlFor="lastName" className="form-label"> <span style={{ color: "red" }}>*</span>Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="form-control"
                                        value={searchLastName}
                                        onChange={(e) => setSearchLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group mb-3">
                                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                                    <input
                                        type="date"
                                        id="dob"
                                        className="form-control"
                                        value={searchDateOfBirth || ''}
                                        onChange={(e) => setSearchDateOfBirth(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-3">
                                <div className="form-group mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        value={searchEmail}
                                        onChange={(e) => setSearchEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group mb-3">
                                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        className="form-control"
                                        value={searchPhoneNumber}
                                        onChange={(e) => setSearchPhoneNumber(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="col-md-4 pl-4 ml-md-3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group mb-3">
                                    <label htmlFor="streetAddress" className="form-label">Street Address</label>
                                    <input
                                        type="text"
                                        id="streetAddress"
                                        className="form-control"
                                        value={searchStreetAddress}
                                        onChange={(e) => setSearchStreetAddress(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-5">
                                <div className="form-group mb-3">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        className="form-control"
                                        value={searchCity}
                                        onChange={(e) => setSearchCity(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group mb-3">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input
                                        type="text"
                                        id="state"
                                        className="form-control"
                                        value={searchState}
                                        onChange={(e) => setSearchState(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label htmlFor="zipCode" className="form-label">Zip Code</label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        className="form-control"
                                        value={searchZipCode}
                                        onChange={(e) => setSearchZipCode(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Search Button */}
                <div >
                    <button className="btn btn-primary" onClick={handleSearch}>
                        Search
                    </button>
                </div>
                {showToast && (
                    <div
                        className="toast show position-fixed bottom-0 end-0 m-3 error-toast"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                    >
                        <div className="toast-header error-toast-header">
                            <strong className="me-auto">Validation Error</strong>
                            <button
                                type="button"
                                className="btn-close error-toast-close"
                                aria-label="Close"
                                onClick={() => setShowToast(false)}
                            ></button>
                        </div>
                        <div className="toast-body">
                            <strong>Error:</strong> Please enter the <u>Last Name</u> before searching.
                        </div>
                    </div>
                )}


                {/* Contacts Table */}
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>DOB</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentContacts.map(contact => (
                                <tr key={contact.email} className="contact-row">
                                    <td>
                                        <input
                                            type="checkbox"
                                            value={contact.id} // Use contact's unique ID as the checkbox value
                                            onChange={(e) => handleContactSelection(e, contact)}
                                            checked={selectedContact && selectedContact.id === contact.id}
                                        />
                                    </td>
                                    <ContactCard contact={contact} />
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        {/* Left Arrow */}
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button
                                className="page-link"
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                aria-label="Previous"
                            >
                                &lt;
                            </button>
                        </li>

                        {/* Current Page Number */}
                        <li className="page-item active">
                            <span className="page-link">{currentPage}</span>
                        </li>

                        {/* Right Arrow */}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button
                                className="page-link"
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                aria-label="Next"
                            >
                                &gt;
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className='mt-3'>{renderSelectedContact()}</div>


            </div>

        </div>

    );
};

export default ContactSearch;
