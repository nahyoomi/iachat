const SearchInput = () => {
  return (
    <input
      className="sidebar__search"
      type="text"
      placeholder="Buscar"
      onChange={(e) => console.log(e.target.value)}
    />
  );
};

export default SearchInput;
