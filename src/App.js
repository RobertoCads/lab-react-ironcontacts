import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"
import { useState } from 'react';

function App() {

  const firstContacts = contacts.splice(0, 5)

  const [contactsList, setContactsList] = useState(firstContacts)

  const randomContact = contacts[Math.floor(Math.random() * contacts.length)]

  const random = () => {
    if (!firstContacts) {
       return randomContact
    }
  }
  

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={() => random()}>Add Random Contact</button><br /> <br />

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
          {contactsList.map(contact => 
            <tr key={contact.id}>

              <td><img src={contact.pictureUrl}/></td>
              <td><p>{contact.name}</p></td>
              <td><p>{contact.popularity.toFixed(2)}</p></td>
              <td>{contact.wonOscar ? <p>🏆</p> : <p></p>}</td>
              <td>{contact.wonEmmy ? <p>🏆</p> : <p></p>}</td>
            </tr>
            )}
          
        </tbody>
        
      </table>
    </div>
  );
}

export default App;
