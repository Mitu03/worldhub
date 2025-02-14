import Infrastructure from "./Image/Infrastructure.avif";
function HeadingInfra() {
  return (
    <div>
      <section className="infrastructure---">
        <div className="infrastructure-1">
          <h1>Global Infrastructure: Definition and Importance</h1>
          <p>
            Infrastructure forms the backbone of modern economies. It refers to
            the physical and organizational structures necessary for the
            functioning of societies, such as transportation networks, energy
            systems, digital infrastructure, and urban development. A strong
            infrastructure improves the quality of life and boosts economic
            growth by enabling seamless trade and connectivity.
          </p>
          <p>
            <strong className="Important-storong">
              Importance of Infrastructure:
            </strong>
          </p>
          <ul>
            <li>
              <strong>Economic Growth:</strong> Supports business activities and
              enhances trade.
            </li>
            <li>
              <strong>Quality of Life:</strong> Ensures access to essential
              services like clean water and power.
            </li>
            <li>
              <strong>Global Connectivity:</strong> Links countries and drives
              globalization.
            </li>
            <li>
              <strong>Disaster Resilience:</strong> Helps mitigate crises and
              ensures recovery.
            </li>
          </ul>
        </div>
        <div className="infrastructure-2">
          <img src={Infrastructure} alt="image" />
        </div>
      </section>
    </div>
  );
}

export default HeadingInfra;
