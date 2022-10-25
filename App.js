//we use the useState to update the states and useEffect to save the data/value locally(in local storage)
import React, {useState, useEffect} from "react";
// we need a unique id to delete so we install uuid by using the following command npm i uuidv4
import {uuid} from "uuidv4";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  // we use the React hooks to update the state
  const[contacts, setContacts] = useState([]);
  // creating  a list 
  /*const contacts =[
    // creating objects here in the list
    {
      id: "1",
      name: "Bob",
      email: "Bob@email.com"
    },
    {
      id: "2",
      name: "Mary",
      email: "Mary@email.com"
    },
  ];*/
  const addContactHandler=(contact)=>{
    // here we update the contacts by using setcontacts
    setContacts([...contacts, {id: uuid(),...contact}]);
  
    const removeContactHandler =(id)=>{
      const newContactList = contacts.filter((contact) => {
        return contact.id !==id;
      });
      setContacts(newContactList);
    }
  };
  // this useEffect with getItem here helps to display the information/ data from the local storage
  useEffect(() =>{
    //JSON.Parse converts the string data to the Javascript object
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts)setContacts(retrieveContacts);
  }, []);

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  
}, [contacts]);
  return (
    
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
