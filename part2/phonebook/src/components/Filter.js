const Filter = ({ filterValue, filterPersons }) => (
  <div>
    filter shown with <input value={filterValue} onChange={filterPersons}></input>
  </div>
);

export default Filter;
