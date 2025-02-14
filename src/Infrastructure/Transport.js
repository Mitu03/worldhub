import imgTransport from "./Image/imgTransport.webp";
import Transc from "./Transc";

function Transport() {
  return (
    <div className="transport---">
      <div className="transport---1">
        <Transc />
      </div>
      <div className="transport---2">
        <img src={imgTransport} alt="Transport" width="300px" height="200px" />
      </div>
    </div>
  );
}

export default Transport;
