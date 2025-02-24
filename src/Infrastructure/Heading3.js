import singapore from "./Image/singapore.webp";
import newyork from "./Image/newyork.webp";
import london from "./Image/london.avif";

function Heading3() {
  return (
    <div className="Infrastructure--MajorCities--">
      <div className="Infrastructure---MajorCities-1">
        <h1 className="Infrastructure---MajorCities-1-heading">
          Smart City Infrastructure
        </h1>
        <p className="Infrastructure---MajorCities-1-paragraph">
          Smart city initiatives are shaping the future of urban living. These
          innovations focus on sustainability and digital transformation.
        </p>
      </div>
      <div className="Infrastructure---MajorCities-2">
        <div className="Infrastructure---MajorCities-2--1child">
          <img src={newyork} alt="newyork" width="200px" height="200px" />
        </div>
        <div className="Infrastructure---MajorCities-2--2child">
          <img src={london} alt="london" width="200px" height="200px" />
        </div>
        <div className="Infrastructure---MajorCities-2--3child">
          <img src={singapore} alt="singapore" width="200px" height="200px" />
        </div>
      </div>
    </div>
  );
}

export default Heading3;
