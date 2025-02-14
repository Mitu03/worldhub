import China from "./Image/China.jpg";
import usa from "./Image/usa.webp";
import europe from "./Image/europe.jpg";
function MajorTransport() {
  return (
    <div className="MajorTransport---">
    <h1>Major Infrastructure Projects Worldwide</h1>
      <div className="Major-Transport">
        <div>
          <img src={China} alt="china" />
          <h4>China's Belt and Road Initiative (BRI)</h4>
          <p>A global project linking Asia, Europe, and Africa.</p>
        </div>
        <div>
          <img src={usa} alt="china" />
          <h4>United States Highway System</h4>
          <p>One of the most extensive highway systems in the world.</p>
        </div>
        <div>
          <img src={europe} alt="china" />
          <h4>European Rail Network</h4>
          <p>Promotes greener and faster travel across Europe.</p>
        </div>
      </div>
    </div>
  );
}

export default MajorTransport;
