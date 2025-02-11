import Mission from "../img/Mission.avif";
function Mission1() {
  return (
    <div className="flex Mission1">
      <div className="Mission1-img flex">
        <img src={Mission} alt="Mission" height="250px" width="400px" />
      </div>

      <div>
        <h5 className="artile">ARTICLE .4 MIN READ</h5>
        <h3>Master Life in Minutes 🧬🌲</h3>
        <p>
          Quick, essential skills to thrive—covering finance, health,
          productivity, and decision-making. Gain confidence, save time, and
          succeed in life effortlessly..
        </p>
      </div>
    </div>
  );
}

export default Mission1;
