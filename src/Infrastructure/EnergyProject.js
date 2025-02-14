import energy1 from "./Image/energy1.avif";

function EnergyProject() {
  return (
    <div className="Energy---">
      <div className="Energy-first">
        <h2>Energy Projects</h2>
        <ul>
          <strong>Three Gorges Dam (China):</strong>
          <li>The world's largest hydroelectric power station.</li>
          <li>
            Foundation for Development: Reliable energy infrastructure is
            essential for economic development, as income and energy consumption
            are tightly correlated across all regions and time periods.
          </li>

          <strong>Quality of Life:</strong>
          <li>
            Health and Comfort: Energy efficiency measures in homes and
            buildings contribute to good air quality, healthy temperatures, and
            lower humidity levels, enhancing overall living conditions.
          </li>
          <li>
            Access to Services: Reliable energy access enables the use of
            essential services such as heating, cooling, and lighting, which are
            fundamental to daily life and well-being.
          </li>
          <strong>Solar Farms in India:</strong>
          <li>India is home to several massive solar power plants.</li>
        </ul>
      </div>

      <div className="Energy-second">
        <img src={energy1} alt="energy" width="300px" height="200px" />
      </div>
    </div>
  );
}

export default EnergyProject;
