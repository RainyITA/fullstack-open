import { useState } from "react";

import "./App.css";

import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

const data = [
  { name: "Arto Hellas", number: "040-123456" },
  { name: "Ada Lovelace", number: "39-44-5323523" },
  { name: "Dan Abramov", number: "12-43-234345" },
  { name: "Mary Poppendieck", number: "39-23-6423122" },
];

function App() {
  const [persons, setPersons] = useState(data);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleAddPerson = (event) => {
    event.preventDefault();

    const isDuplicated = persons.some((person) => person.name === newName);

    if (isDuplicated) {
      alert(`The name ${newName} already exists`);
      setNewName("");
      setNewNumber("");
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterPerson = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="App">
      <h1>EXERCISES</h1>

      {!(persons.length > 0) ? null : (
        <Filter value={filter} handleFilterPerson={handleFilterPerson} />
      )}

      <h2>Phonebook</h2>
      <PersonForm
        handleAddPerson={handleAddPerson}
        newName={newName}
        handleChangeName={handleChangeName}
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
      />
      <Persons persons={persons} filter={filter} />
    </div>
  );
}

export default App;
