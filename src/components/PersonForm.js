const PersonForm = ({
  handleAddPerson,
  newName,
  handleChangeName,
  newNumber,
  handleChangeNumber,
}) => {
  return (
    <form onSubmit={handleAddPerson}>
      <div>
        <label htmlFor="person">Name:</label>
        <input
          type="text"
          id="person"
          value={newName}
          onChange={handleChangeName}
        />
      </div>
      <div>
        <label htmlFor="number">Number:</label>
        <input
          type="text"
          id="number"
          value={newNumber}
          onChange={handleChangeNumber}
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default PersonForm;
