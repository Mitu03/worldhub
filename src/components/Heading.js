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

import { Link } from "react-router-dom";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";

function Heading() {
  const [isOPEN, setisOpen] = useState(false);

  function bar() {
    setisOpen((isOPEN) => !isOPEN);
  }

  function Linkpress() {
    setisOpen(false);
  }

  return (
    <div className="nav-menu">
      {isOPEN && (
        <button onClick={Linkpress} className="nav-menu-ul">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/economic-Indicator">
            Economic
          </Link>
          <Link className="nav-link" to="/demographic-data">
            Demographic
          </Link>

          <Link className="nav-link" to="/trade&globalization">
            Trade and Globalization
          </Link>

          <Link className="nav-link" to="/infrastructure">
            Infrastructure Data
          </Link>
        </button>
      )}
      <button onClick={bar} className="menu-button">
        <VscMenu />
      </button>
    </div>
  );
}

export default Heading;
