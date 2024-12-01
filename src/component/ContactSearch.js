import React, { useState, useEffect } from 'react';
import { paginateContacts } from '../utils/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { contactsData } from '../utils/SampleData';
import ToastMessage from './ToastMessage';
import Pagination from './Pagination';
import SearchForm from './SearchForm';
import '../styles/styles.css';
import ContactGrid from './ContactGrid';

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
    const [toastValue, setToastValue] = useState("")

    const handleContactSelection = (e, contact) => {
        if (e.target.checked) {
            setSelectedContact(contact);
        } else {
            setSelectedContact(null);
        }
    };


    const handleSearch = () => {
        // If the last name is empty, show toast and exit the function
        if (!searchLastName.trim()) {
            setShowToast(true);
            setToastValue("Last Name")
            return 
        }
        const filterData = {
            firstName: searchFirstName.trim().toLowerCase(),
            lastName: searchLastName.trim().toLowerCase(),
            dateOfBirth: searchDateOfBirth,
            email: searchEmail.trim().toLowerCase(),
            phoneNumber: searchPhoneNumber.trim().toLowerCase(),
            streetAddress: searchStreetAddress.trim().toLowerCase(),
            city: searchCity.trim().toLowerCase(),
            state: searchState.trim().toLowerCase(),
            zipCode: searchZipCode.trim().toLowerCase(),
        };

        const filtered = contactsData.filter(contact => {
            return Object.entries(filterData).every(([key, value]) => {
                if (!value) return true; 
                const contactValue = contact[key]?.toLowerCase() || ''; 
                return contactValue.includes(value); // Check if the contact field contains the  value
            });
        });

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
            }, 1000)
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const uniqueStates = [];
    const stateTracker = {}; 

    // Used for Getting all unique states from the json 
    contactsData.forEach(contact => {
        if (!stateTracker[contact.state]) {
            stateTracker[contact.state] = true;
            uniqueStates.push(contact.state);
        }
    });

    const { currentContacts, totalPages } = paginateContacts(filteredContacts, currentPage, itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const renderSelectedContact = () => {
        if (!selectedContact) return <p className="text-center text-muted">No contact selected.</p>;
    
        const { firstName, lastName, email, phoneNumber, streetAddress, city, state, zipCode } = selectedContact;
    
        return (
            <div className="card shadow-lg rounded p-4 bg-light">
                <h5 className="mb-3 text-primary">Selected Contact</h5>
                <div className="contact-detail">
                    <p><strong>Name:</strong> <span className="text-dark">{firstName} {lastName}</span></p>
                    <p><strong>Email:</strong> <span className="text-muted">{email}</span></p>
                    <p><strong>Phone:</strong> <span className="text-muted">{phoneNumber}</span></p>
                    <p><strong>Address:</strong> <span className="text-muted">{streetAddress}, {city}, {state} {zipCode}</span></p>
                </div>
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

                <SearchForm
                    searchFirstName={searchFirstName} setSearchFirstName={setSearchFirstName}
                    searchLastName={searchLastName} setSearchLastName={setSearchLastName}
                    searchDateOfBirth={searchDateOfBirth} setSearchDateOfBirth={setSearchDateOfBirth}
                    searchEmail={searchEmail} setSearchEmail={setSearchEmail}
                    searchPhoneNumber={searchPhoneNumber} setSearchPhoneNumber={setSearchPhoneNumber}
                    searchStreetAddress={searchStreetAddress} setSearchStreetAddress={setSearchStreetAddress}
                    searchCity={searchCity} setSearchCity={setSearchCity}
                    searchState={searchState} setSearchState={setSearchState}
                    searchZipCode={searchZipCode} setSearchZipCode={setSearchZipCode}
                    uniqueStates={uniqueStates}
                />
                <div >
                    <button className="btn btn-primary" onClick={handleSearch}>
                        Search
                    </button>
                </div>

                <ToastMessage showToast={showToast} setShowToast={setShowToast} value={toastValue} />


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
                                    <ContactGrid contact={contact} />
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    paginate={paginate}
                />
                <div className='mt-3'>{renderSelectedContact()}</div>


            </div>

        </div>

    );
};

export default ContactSearch;
