export const paginateContacts = (contacts, currentPage, itemsPerPage) => {
    const indexOfLastContact = currentPage * itemsPerPage;
    const indexOfFirstContact = indexOfLastContact - itemsPerPage;
    const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);
    const totalPages = Math.ceil(contacts.length / itemsPerPage);
  
    return { currentContacts, totalPages };
  };
  