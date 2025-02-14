import Transport from "./Transport";

import EnergyProject from "./EnergyProject";
import Digital from "./Digital";
import Urban from "./Urban";

function Heading2() {
  return (
    <>
      <h1>Global Infrastructure</h1>
      <p className="components-p">
        Global infrastructure is categorized into several key areas, each
        playing a critical role in supporting economic activities and improving
        living standards. Below are the primary components:
      </p>

      <Transport />

      <EnergyProject />

      <Digital />

      <Urban />
    </>
  );
}

export default Heading2;
