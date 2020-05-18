const orderByKey = (list, key) => {
    return list.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1;
        }
    
        if (a[key] > b[key]) {
            return 1;
        }
    
        return 0;
    });
};

const filterContacts = (contacts, text, orderBy) => {
    if (!text.length) {
        return orderByKey(contacts, orderBy);
    }

    let newContacts = contacts.filter(contact => {
        if (
            contact.name.toLowerCase().includes(text) ||
            contact.department.toLowerCase().includes(text) ||
            contact.country.toLowerCase().includes(text) ||
            contact.phone.toLowerCase().includes(text) ||
            contact.company.toLowerCase().includes(text)
        ) {
            return true;
        }

        return false;
    });

    newContacts = orderByKey(newContacts, orderBy);

    return newContacts;
};

export {
    filterContacts,
};