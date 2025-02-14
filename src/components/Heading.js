// import { Link } from "react-router-dom";
// import { useState } from "react";

// function AppLayout(){}
//   return (
//     <div className="container">
//       <ul className="nav-bar flex">
//         <Link className="nav-link" to="/">
//           Home
//         </Link>
//         <Link className="nav-link" to="/economic-Indicator">
//           Economic Indicators
//         </Link>
//         <Link className="nav-link" to="/demographic-data">
//           Demographic Data
//         </Link>
//         <Link className="nav-link" to="/trade&globalization">
//           Trade and Globalization
//         </Link>
//         <Link className="nav-link" to="/infrastructure">
//           Infrastructure Data
//         </Link>
//       </ul>
//     </div>
//   );
// }

// export default Heading;

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Heading() {
  const location = useLocation(); // Get the current URL path
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname); // Update active link when the route changes
  }, [location]);

  return (
    <div className="container">
      <ul className="nav-bar flex">
        <li>
          <Link
            className={`nav-link ${activeLink === "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              activeLink === "/economic-Indicator" ? "active" : ""
            }`}
            to="/economic-Indicator"
          >
            Economic Indicators
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              activeLink === "/demographic-data" ? "active" : ""
            }`}
            to="/demographic-data"
          >
            Demographic Data
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              activeLink === "/trade&globalization" ? "active" : ""
            }`}
            to="/trade&globalization"
          >
            Trade and Globalization
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              activeLink === "/infrastructure" ? "active" : ""
            }`}
            to="/infrastructure"
          >
            Infrastructure Data
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default Heading;
