import Transport from "./Transport";

import EnergyProject from "./EnergyProject";
import Digital from "./Digital";
import Urban from "./Urban";

function Heading2() {
  return (
    <div>
      <div className="Infrastructure---MainContent">
        <h1 className="Infrastructure---MainContent-heading">
          Global Infrastructure
        </h1>
        <p className="Infrastructure---MainContent-paragraph">
          Global infrastructure is categorized into several key areas, each
          playing a critical role in supporting economic activities and
          improving living standards. Below are the primary components:
        </p>
      </div>
      <div>
        <Transport />

        <EnergyProject />

        <Digital />

        <Urban />
      </div>
    </div>
  );
}

export default Heading2;
