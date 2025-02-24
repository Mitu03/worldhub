import Japan from "./Image/Japan.avif";
import Germany from "./Image/Germany.avif";
import singapore from "./Image/singapore.webp";
import softinfrastructure from "./Image/softinfrastructure.jpg";
import HardInfrastructure from "./Image/HardInfrastructure.webp";
function Ranking() {
  return (
    <div className="Infrastructure--ranking">
      <div className="Infrastructure--ranking-child1">
        <h1>Global Infrastructure Rankings and Types</h1>
        <p>
          Countries are often ranked based on the quality of their
          infrastructure. The World Economic Forum highlights the
          best-performing nations in terms of transport, energy, and digital
          infrastructure.
        </p>
      </div>

      <div className="Infrastructure--ranking-child2">
        <div className="Infrastructure--ranking-child2-1">
          <img src={Japan} alt="japan" width="200px" height="300px" />
          <h3>Japan</h3>
        </div>
        <div className="Infrastructure--ranking-child2-2">
          <img src={Germany} alt="germany" width="200px" height="300px" />
          <h3>Germany</h3>
        </div>
        <div className="Infrastructure--ranking-child2-3">
          <img src={singapore} alt="singapore" width="200px" height="300px" />
          <h3>singapore</h3>
        </div>
      </div>

      <div className="Infrastructure--ranking-child3">
        <h2 className="Infrastructure--ranking-child3-heading">
          Types of Infrastructure
        </h2>

        <div className="Infrastructure--ranking-child3--1">
          <div className="Infrastructure--ranking-child3--1--1">
            <p>
              <strong>Hard Infrastructure:</strong>
              <p> Physical systems like roads, bridges, and power grids.</p>
            </p>
            <img
              src={HardInfrastructure}
              alt="HardInfrastructure"
              width="200px"
              height="200px"
            />
          </div>

          <div className="Infrastructure--ranking-child3--2">
            <strong>Soft Infrastructure:</strong>
            <p>
              Non-physical systems like governance, education, and financial
              systems.
            </p>
            <img
              src={softinfrastructure}
              alt="soft"
              width="200px"
              height="200px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
