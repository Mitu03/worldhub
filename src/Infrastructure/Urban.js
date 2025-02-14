import imgUrban from "./Image/imgUrban.avif";
function Urban() {
  return (
    <div className="urban---">
      <div className="urban--first">
        <h1>Urban Infrastructure</h1>
        <div class="section">
          <strong>Economic Growth:</strong>
          <ul>
            <li>
              Promotes efficient land use and infrastructure development,
              leading to increased productivity and economic opportunities.
            </li>
          </ul>
        </div>

        <div class="section">
          <strong>Improved Quality of Life:</strong>
          <ul>
            <li>
              Enhances access to essential services such as healthcare,
              education, and recreation, contributing to residents' well-being.
            </li>
          </ul>
        </div>

        <div class="section">
          <strong>Sustainable Living:</strong>
          <ul>
            <li>
              Encourages environmentally friendly practices, including green
              spaces and sustainable transportation options.
            </li>
          </ul>
        </div>

        <div class="section">
          <strong>Technological Advancement:</strong>
          <ul>
            <li>
              Facilitates the integration of smart technologies to improve urban
              management and service delivery.
            </li>
          </ul>
        </div>

        <div class="section">
          <strong>Cultural Preservation:</strong>
          <ul>
            <li>
              Supports the conservation of historical sites and promotes
              cultural heritage within urban settings.
            </li>
          </ul>
        </div>
      </div>
      <div className="urban--second">
        <img src={imgUrban} alt="urban" width="300px" height="200px" />
      </div>
    </div>
  );
}

export default Urban;
