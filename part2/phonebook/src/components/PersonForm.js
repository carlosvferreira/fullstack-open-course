const PersonForm = ({ addPerson, newName, setNewName, newNumber, setNewNumber }) => (
  <form onSubmit={addPerson}>
    <div>
      name:{" "}
      <input
        value={newName}
        onChange={(e) => {
          const currentName = e.target.value;
          setNewName(currentName);
        }}
      />
    </div>
    <div>
      number:{" "}
      <input
        value={newNumber}
        onChange={(e) => {
          const currentNumber = e.target.value;
          setNewNumber(currentNumber);
        }}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default PersonForm;
