import Heading from "./components/Heading";
import Home from "./Utility/Home";
import ExampleSection from "./Utility/ExampleSection";
import DashBoard from "./Indicators/DashBoard";
function App() {
  return (
    <>
      <div>
        <Heading />
        <Home />
        <ExampleSection />
      </div>

      <div>
        <DashBoard />
      </div>
    </>
  );
}

export default App;
