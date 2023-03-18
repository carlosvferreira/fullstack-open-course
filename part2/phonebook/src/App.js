import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [personsToDisplay, setPersonsToDisplay] = useState(persons);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setPersonsToDisplay(response.data);
    });
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = { name: newName, number: newNumber, id: persons.at(-1).id + 1 };
    if (persons.some((person) => person.name === newName)) {
      return alert(`${newName} already exists`);
    }
    setNewName("");
    setNewNumber("");
    const newPersonsList = persons.concat(newPerson);
    setPersons(newPersonsList);
    setPersonsToDisplay(newPersonsList);
  };

  const filterPersons = (e) => {
    setFilterValue(e.target.value);
    const filteredByName = persons.filter((person) => person.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setPersonsToDisplay(filteredByName);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filterValue} filterPersons={filterPersons}></Filter>
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      ></PersonForm>
      <h2>Numbers</h2>
      <Persons personsToDisplay={personsToDisplay}></Persons>
    </div>
  );
};

export default App;
