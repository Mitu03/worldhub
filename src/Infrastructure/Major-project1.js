import China from "./Image/China.jpg";
import usa from "./Image/usa.webp";
import europe from "./Image/europe.jpg";
function MajorTransport() {
  return (
    <div className="Infrastructure---transport">
      <h1 className="Infrastructure---transport-heading">
        Major Infrastructure Projects Worldwide
      </h1>
      <div className="Infrastructure---transport-1">
        <div className="Infrastructure---transport-1-1child">
          <img src={China} alt="china" width="200px" height="200px" />
          <h4>China's Belt and Road Initiative (BRI)</h4>
          <p>A global project linking Asia, Europe, and Africa.</p>
        </div>
        <div className="Infrastructure---transport-1-2child">
          <img src={usa} alt="china" width="200px" height="200px" />
          <h4>United States Highway System</h4>
          <p>One of the most extensive highway systems in the world.</p>
        </div>
        <div className="Infrastructure---transport-1-3child">
          <img src={europe} alt="china" width="200px" height="200px" />
          <h4>European Rail Network</h4>
          <p>Promotes greener and faster travel across Europe.</p>
        </div>
      </div>
    </div>
  );
}

export default MajorTransport;
