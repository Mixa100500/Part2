import { useState } from 'react'
import Filter from './components/Filter'
import PersoneForm from './components/PersoneForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNamber] = useState('');
  const [searching, setSearching] = useState('');
  const [found, setFound] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNamber(event.target.value);
  }
  
  const handleSearchChandge = (event) => {
    const value = event.target.value.toLocaleLowerCase();
    setSearching(value);

    const result = persons.filter(person => person.name.toLocaleLowerCase().indexOf(value) !== -1);
    setFound(result);
  }

  const addPerson = (event) => {
    event.preventDefault();
    let isIncudes = false;

    persons.forEach(person => {
      if (person.name !== newName) return;
      isIncudes = true;
    })

    if (isIncudes) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const person = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    };
    
    setPersons(persons.concat(person))
    setNewName('');
    setNamber('');
  }
  const information = searching.length === 0
    ? persons 
    : found;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        value={searching}
        handleNameChange={handleSearchChandge}
      />
      <h2>add a new</h2>
      <PersoneForm
        handleNameChange={handleNameChange}
        newName={newName}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons information = {information}/>
    </div>
  )
}

export default App