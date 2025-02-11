import { useState } from "react";
import { useEffect } from "react";
import { data } from "./data";

function SearchBar({ onCountry }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Call onCountry with 'IN' (India's country code) on component mount
    onCountry(data["india"]);
  }, [onCountry]);

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
      <input
        type="text"
        placeholder="Enter country name (e.g India)"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handlefunction}>Search</button>
    </div>
  );
}

export default SearchBar;
