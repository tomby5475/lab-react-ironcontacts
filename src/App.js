import "./App.css";
import contacts from "./contacts.json"
import { useState } from 'react'


function App() {
  //const firstFive = contacts.slice(0,5)
  const [contactsState, setContactsState] = useState(contacts.slice(0, 5))

  function addContact() {
     let randomIndex = Math.floor(Math.random() * contacts.length)
     //copy an array
     let contactsStateCopy = [...contactsState]
     //add a new element to an Arr
     contactsStateCopy.push(contacts[randomIndex])
     setContactsState(contactsStateCopy)
  }

  function sortedByPopularity() {
    let contactsStateCopy = [...contactsState]
    let sortedPopularity = contactsStateCopy.sort((a, b) => {return b.popularity - a.popularity})
      setContactsState(sortedPopularity)
  }

  function sortedByName() {
    let contactsStateCopy = [...contactsState]
    let sortedAlphabetically = contactsStateCopy.sort((a, b) => a.name.localeCompare(b.name))
    setContactsState(sortedAlphabetically)
  }

  function deleteContact(contactId) {
    setContactsState(contacts => contacts.filter(contact => contact.id !== contactId))
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
        <button onClick={addContact}>Add Random Contact</button>
        <button onClick={sortedByPopularity}>Sort by popularity</button>
        <button onClick={sortedByName}>Sort by name</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
          </thead>
          <tbody>
          {contactsState.map(contact =>
          (
            <tr key={contact.id}>
              <td><img className="contactImg" src={contact.pictureUrl} alt={contact.name}/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? <p>🏆</p> : <p></p>}</td>
              <td>{contact.wonEmmy ? <p>🏅</p> : <p></p>}</td>
              {/* calling the function is not enough, should be an arrow sintaxis  */}
              <td><button onClick={()=>deleteContact(contact.id)}>Delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>
  </div>
 
  )
}
export default App;


