import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SearchForm = ({
    searchFirstName, setSearchFirstName,
    searchLastName, setSearchLastName,
    searchDateOfBirth, setSearchDateOfBirth,
    searchEmail, setSearchEmail,
    searchPhoneNumber, setSearchPhoneNumber,
    searchStreetAddress, setSearchStreetAddress,
    searchCity, setSearchCity,
    searchState, setSearchState,
    searchZipCode, setSearchZipCode,
    uniqueStates
}) => {
    return (
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
                            <label htmlFor="lastName" className="form-label">
                                <span style={{ color: "red" }}>*</span>Last Name
                            </label>
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
                            <div className="dropdown-container">
                                <select
                                    id="state"
                                    className="form-control custom-select"
                                    value={searchState}
                                    onChange={(e) => setSearchState(e.target.value)}
                                >
                                    <option value=""></option>
                                    {uniqueStates.map((state, index) => (
                                        <option key={index} value={state}>{state}</option>
                                    ))}
                                </select>
                                <div className="dropdown-icon">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
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
    );
};

export default SearchForm;
