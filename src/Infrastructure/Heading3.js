import singapore from "./Image/singapore.webp";
import newyork from "./Image/newyork.webp";
import london from "./Image/london.avif";

function Heading3() {
  return (
    <div className="Heading3">
      <div>
        <h1>Smart City Infrastructure</h1>
        <p>
          Smart city initiatives are shaping the future of
          urban living. These innovations focus on sustainability and digital
          transformation.
        </p>
      </div>
      <div className="MajorCities">
        <div>
          <img src={newyork} alt="newyork" />
        </div>
        <div>
          <img src={london} alt="london" />
        </div>
        <div>
          <img src={singapore} alt="singapore" />
        </div>
      </div>
    </div>
  );
}

export default Heading3;
