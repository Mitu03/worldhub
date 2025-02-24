import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import {
  fetchPopulation,
  fetchPopulationGrowth,
  fetchLifeExpectancy,
  fetchLiteracyRate,
} from "../Services/apiDemo";
import DemoSearch from "./DemoSearch";
import DataofAll from "./DataofAll";

// fetchCountryData,
//   fetchHealthData,

function DemoDash() {
  const [countryPopulation, setPopulation] = useState([]);
  const [growthRate, setGrowthRate] = useState([]);
  const [lifeExpectancy, setLifeExpectancy] = useState([]);
  const [literacyRate, setLiteracyRate] = useState([]);
  // const [countryData, setCountryData] = useState([]);
  // const [healthData, setHealthData] = useState([]);

  const handleDetail = async (countryCode) => {
    const population = await fetchPopulation(countryCode);
    const growthRate = await fetchPopulationGrowth(countryCode);
    const lifeExpectancy = await fetchLifeExpectancy(countryCode);
    const literacy = await fetchLiteracyRate(countryCode);
    // const countryData = await fetchCountryData();
    // const health = await fetchHealthData();

    setPopulation(population);
    setGrowthRate(growthRate);
    setLifeExpectancy(lifeExpectancy);
    setLiteracyRate(literacy);
    // setCountryData(countryData);
    // setHealthData(health)
  };

  return (
    <div className="demographic--">
      <div className="demographic--1">
        <DemoSearch onCountry={handleDetail} />
      </div>
      <div className="AllDemoGraph">
        <div className="demographic--2">
          <div className="demographic--child1">
            <DataofAll
              population={countryPopulation}
              Growth={growthRate}
              life={lifeExpectancy}
              literacy={literacyRate}
            />
          </div>

          <div className="Chart-container-- demographic--child2">
            <h3 className="demographic--child2--head">
              Population Growth Rate
            </h3>
            <ResponsiveContainer className="barchart">
              <BarChart width={400} height={300} data={growthRate}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fill: "#000000" }} />
                <YAxis tick={{ fill: "#000000" }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="Chart-container-- demographic--child3">
            <h3 className="demographic--child2--head">Population Data</h3>
            <ResponsiveContainer>
              <LineChart width={400} height={300} data={countryPopulation}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" tick={{ fill: "#000000" }} />
                <YAxis tick={{ fill: "#000000" }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="Chart-container-- demographic--child4">
            <h3 className="demographic--child2--head">Life Expectancy</h3>
            <ResponsiveContainer>
              <LineChart width={400} height={300} data={lifeExpectancy}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" tick={{ fill: "#000000" }} />
                <YAxis tick={{ fill: "#000000" }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="Chart-container-- demographic--child5">
            <h3 className="demographic--child2--head">Literacy Rate</h3>
            <ResponsiveContainer>
              <LineChart width={400} height={300} data={literacyRate}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" tick={{ fill: "#000000" }} />
                <YAxis tick={{ fill: "#000000" }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#ff0000" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoDash;
