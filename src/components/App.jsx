import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm/ContactForm'
import { nanoid } from 'nanoid'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'


export default function App() {
const [contacts, setContacts] = useState([
{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]);

const [filter, setFilter] = useState('');

useEffect(() => {
  const contacts = localStorage.getItem("contacts");
  const contactsParsed = JSON.parse(contacts);
  if (contactsParsed) {
    setContacts(contactsParsed);
  }
}, [])

useEffect(()=> {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
,[contacts] )

const addContact = ({ name,number }) => {
      
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
  
      const savedContacts = contacts.find((contact) => contact.name === newContact.name)
      if(savedContacts){
        alert(`${newContact.name} is already in contacts.`)
        return
      }
      setContacts([newContact,...contacts])
    };

const changeFilter = (e) => {
  setFilter(e.currentTarget.value)};


const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );


 const deleteContact = (contactId) => {
  setContacts((contacts) =>
  contacts.filter((contact) => contact.id !== contactId)
      )
  };
  
  return (
    <div className='wrapper'>
        <h1 className='title'>Phonebook</h1>
        <ContactForm onSubmit={addContact}/>
        <h2 className='title'>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getVisibleContacts}
          onDeleteContact={deleteContact}
       />
      </div>
  )
}


