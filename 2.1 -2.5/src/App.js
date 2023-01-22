import { useState } from 'react'

const Person = (props) => {
  <li>{props.name}</li>
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1}
  ]) 
  const [newName, setNewName] = useState('');

  const handlePeopleChange = (event) => {
    setNewName(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    const person = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(person))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: 
          <input 
            onChange={handlePeopleChange} 
            value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person name={person}/>)}
      </ul>
    </div>
  )
}

export default App