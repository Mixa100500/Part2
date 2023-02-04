import axios from 'axios'
import { useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersoneForm from './components/PersoneForm'
import Persons from './components/Persons'
import numberService from './services/notes'


const App = () => {
  const [persons, setPersons] = useState([]);

  const promise = axios.get("http://localhost:3001/persons");
  useEffect(() => {
      promise.then(response => {
        setPersons(response.data);
      })
  }, []);

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

  const deletePersone = id => {
    const person = persons.find(p => p.id === id);
    if (!window.confirm(`delete ${person.name} ${id}`)) return;
    numberService.remove(id);

    setPersons(persons.filter(
      person => person.id !== id
      ));
  }

  const addPerson = (event) => {
    event.preventDefault();
    let isIncudes = false;
    let identifier;

    persons.forEach((person, index) => {
      if (person.name !== newName) return;
      isIncudes = true;
      identifier = index;
    })
    
    const person = {
      name: newName,
      number: newNumber,
    };

    if (isIncudes) {
      if (!window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) return;
      setPersons(
        persons.map( 
          person => (person.name === newName) ? { ...person, number: newNumber } : person
        )
      );
      console.log(identifier)
      numberService
        .update(identifier + 1, { ...person})
        .then(returnedPerson => {
          setPersons(
            persons.map(
              person => {
                console.log(person.id, identifier + 1, person.name);
                return person.id !== identifier + 1 ? person : returnedPerson
              }
            )       
          )
        })
      setNewName('');
      setNamber('');
      return;
    }


    numberService
      .create(person)
      .then(response => setPersons(persons.concat(response)));
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
        handleSearchChandge={handleSearchChandge}
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
      <Persons 
        information = {information}
        deletePersone={deletePersone}/>
    </div>
  )
}

export default App