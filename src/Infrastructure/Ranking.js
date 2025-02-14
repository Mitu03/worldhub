import Japan from "./Image/Japan.avif";
import Germany from "./Image/Germany.avif";
import singapore from "./Image/singapore.webp";
import softinfrastructure from "./Image/softinfrastructure.jpg";
import HardInfrastructure from "./Image/HardInfrastructure.webp";
function Ranking() {
  return (
    <div className="Ranking">
      <div className="RankHeading">
        <h1>Global Infrastructure Rankings and Types</h1>
        <p>
          Countries are often ranked based on the quality of their
          infrastructure. The World Economic Forum highlights the
          best-performing nations in terms of transport, energy, and digital
          infrastructure.
        </p>
      </div>

      <div className="Rankingsubbody">
        <h2>Top-Ranked Countries</h2>
        <div className="ranking-infrastructure">
          <div>
            <img src={Japan} alt="japan" width="200px" height="300px" />
            <h3>Japan</h3>
          </div>
          <div>
            <img src={Germany} alt="germany" width="200px" height="300px" />
            <h3>Germany</h3>
          </div>
          <div>
            <img src={singapore} alt="singapore" width="200px" height="300px" />
            <h3>singapore</h3>
          </div>
        </div>

        <div className="Type-Infrastructure">
          <h2>Types of Infrastructure</h2>

          <div className="Infrastructure-type">
            <div>
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

            <div>
              <p>
                <strong>Soft Infrastructure:</strong>
                <p>
                  Non-physical systems like governance, education, and financial
                  systems.
                </p>
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
    </div>
  );
}

export default Ranking;
