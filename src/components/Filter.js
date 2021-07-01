const Filter = ({ filter, handleFilterPerson }) => {
  return (
    <form>
      <label htmlFor="filterInput">Filter people: </label>
      <input
        type="text"
        id="filterInput"
        value={filter}
        onChange={handleFilterPerson}
      />
    </form>
  );
};

export default Filter;
