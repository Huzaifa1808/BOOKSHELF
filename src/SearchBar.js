// import React, { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSearch}>
//       <input
//         className="input "
//         type="text"
//         placeholder="Search books"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchBar;

import React, { useState, useCallback } from "react";
import { debounce } from "lodash";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Debounce the onSearch function to delay API calls
  const debouncedSearch = useCallback(debounce(onSearch, 500), []);

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search books"
        value={query}
        onChange={handleChange}
      />
      <button> Search </button>
    </>
  );
};

export default SearchBar;
