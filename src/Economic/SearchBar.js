import { useState } from "react";
import { useEffect } from "react";
import { data } from "../DATA/data";

function SearchBar({ onCountry }) {
  const [inputValue, setInputValue] = useState("");
  const [Searched, setSearched] = useState("India");

  useEffect(() => {
    // Call onCountry with 'IN' (India's country code) on component mount
    onCountry(data["india"]);
  }, [onCountry]);

  function ChangeSearch() {
    setSearched(inputValue);
  }

  function handleBoth() {
    ChangeSearch();
    handlefunction();
  }

  function handlefunction() {
    const countryCode = data[inputValue.toLowerCase()];
    if (countryCode) {
      onCountry(countryCode);
      setInputValue("");
    } else {
      alert("Country not found!");
    }
  }
  return (
    <div className="search-country flex">
      <div className="Search-content flex">{Searched}</div>
      <div className="search-input flex">
        <div>
          {" "}
          <input
            type="text"
            placeholder="Enter country name (e.g India)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleBoth}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
