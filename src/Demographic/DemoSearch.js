import { useState } from "react";
import { useEffect } from "react";
import { data } from "../DATA/data";

function DemoSearch({ onCountry }) {
  const [searchCountry, setCountry] = useState("");
  const [displayName, setDisplayname] = useState("India");

  useEffect(() => {
    let defaultCountry = "india"; // Default country set to India
    const countryCode = data[defaultCountry]; // Get the country code for India
    if (countryCode && onCountry) {
      onCountry(countryCode); // Pass the default country code to the parent
    }
  }, []);

  function changeName() {
    setDisplayname(searchCountry);
  }

  function buttoncall() {
    handlefunction();
    changeName();
  }

  function handlefunction() {
    const countrycode = data[searchCountry.toLowerCase()];
    if (countrycode) {
      onCountry(countrycode);
      setCountry("");
    } else {
      alert("Enter valid country");
    }
  }
  return (
    <div className="demographic-search---">
      <div className="demographic-search---name">{displayName}</div>
      <div className="demographic-search---input ">
        <div className="demographic-search--input--">
          {" "}
          <input
            type="text"
            value={searchCountry}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter country name"
          />
        </div>

        <div className="demographic-search--button">
          {" "}
          <button onClick={buttoncall}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default DemoSearch;
