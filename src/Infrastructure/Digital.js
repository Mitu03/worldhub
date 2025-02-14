import imgDigital from "./Image/imgDigital.jpg";
function Digital() {
  return (
    <div className="Digital---">
      <div className="Digital--first">
        <h1>Digital Infrastructure</h1>
        <div class="section">
          <strong>Economic Growth:</strong>
          <ul>
            <li>
            Foundation for Development: Reliable energy infrastructure is essential for economic development, as income and energy consumption are tightly correlated across all regions and time periods.
            </li>
          </ul>
        </div>

        <div class="section">
          <strong>Connectivity:</strong>
          <ul>
            <li>
              Facilitates seamless communication and collaboration across the
              globe, bridging geographical divides and fostering social
              inclusion.
            </li>
          </ul>
        </div>

        <div class="section">
          <strong>Service Delivery:</strong>
          <ul>
            <li>
              Enhances the efficiency and reach of services in sectors like
              healthcare, education, and government, improving overall quality
              of life.
            </li>
          </ul>
        </div>

        <div class="section">
          <strong>Resilience and Scalability:</strong>
          <ul>
            <li>
              Provides a robust framework that can adapt to increasing demands
              and evolving technologies, ensuring continuous service
              availability.
            </li>
          </ul>
        </div>
      </div>

      <div className="Digital--second">
        <img src={imgDigital} alt="digital" width="300px" height="200px" />
      </div>
    </div>
  );
}

export default Digital;
