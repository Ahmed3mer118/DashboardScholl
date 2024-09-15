import axios from "axios";
import React, { useEffect, useState } from "react";

function Search() {
  const [searchItem, setSearchItem] = useState("");
  const [searchId, setSearchId] = useState(false);
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    axios
      .get("https://freetestapi.com/api/v1/students")
      .then((res) => {
        setStudents(res.data);
        setFilteredStudents(res.data); //
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchItem(value);

    const filterResults = searchId
      ? students.filter((student) => student.id.toString().includes(value))
      : students.filter((student) => student.name.toLowerCase().includes(value));
    
    setFilteredStudents(filterResults);
  };

  return (
    <div>
       <h1>Search By {searchById ? "ID" : "Name"}</h1>
      <button type="button" onClick={toggleSearchMode}>
        Search by {searchById ? "Name" : "ID"}
      </button>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder={searchById ? "ID" : "Name"}
          value={searchItem}
          onChange={handleSearch}
        />
        <button type="button" className="btn btn-primary p-1" onClick={handleSearch}>
          Search
        </button>
      </form>
      {filteredStudents.length > 0 ? (
        filteredStudents.map((student) => (
          <div key={student.id}>
            <h1>
              {student.id} - {student.name}
            </h1>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default Search;
