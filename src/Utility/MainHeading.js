import { useState, useRef, useEffect } from "react";

function MainHeading() {
  const [aiSearch, setAIsearch] = useState("");
  const inputfield = useRef(null);

  useEffect(() => {
    inputfield.current.focus();
  }, []);

  return (
    <div className="Home---input">
      <input
        type="text"
        value={aiSearch}
        onChange={(e) => setAIsearch(e.target.value)} // Corrected 'valuse' to 'value'
        placeholder="Search for..."
        ref={inputfield} // Added ref to the input element
      />
      <button>Search</button>
    </div>
  );
}

export default MainHeading;

