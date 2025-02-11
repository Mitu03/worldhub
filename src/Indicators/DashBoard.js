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
} from "recharts";
import {
  fetchExternalDebt,
  fetchForeignReserves,
  fetchGDP,
  fetchInflation,
  fetchUnemployment,
} from "../Services/services";
import SearchBar from "./SearchBar";

function DashBoard() {
  const [gdpData, setGdpData] = useState([]);
  const [inflatation, setInflationData] = useState([]);
  const [unemployment, setUnemploymentData] = useState([]);
  const [debtData, setDebtData] = useState([]);
  const [reservesData, setReservesData] = useState([]);

  const handleCountrySelect = async (countrycode) => {
    const gdp = await fetchGDP(countrycode);
    const inflatation = await fetchInflation(countrycode);
    const unemployment = await fetchUnemployment(countrycode);
    const externalDebt = await fetchExternalDebt(countrycode);
    const foreignReserves = await fetchForeignReserves(countrycode);

    setGdpData(gdp);
    setInflationData(inflatation);
    setUnemploymentData(unemployment);
    setDebtData(externalDebt);
    setReservesData(foreignReserves);
  };
  return (
    <div className="container">
      <div className="Graph-Heading flex">
        <h1>Economic Indicators</h1>
        <SearchBar onCountry={handleCountrySelect} />
      </div>
      <div className="Main-of-all">
        <div>
          <h2 className="heading-data">GDP Trend</h2>
          <LineChart width={600} height={300} data={gdpData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
        <div>
          <h2 className="heading-data">Inflation Trend</h2>
          <BarChart width={600} height={300} data={inflatation}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </div>

        <div>
          <h2 className="heading-data">Unemployment Rate</h2>
          <LineChart width={600} height={300} data={unemployment}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#ff7300" />
          </LineChart>
        </div>

        <div>
          <h2 className="heading-data">External Debt</h2>
          <LineChart width={600} height={300} data={debtData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#ff0000" />
          </LineChart>
        </div>

        <div>
          <h2 className="heading-data">Foreign Reserves</h2>
          <LineChart width={600} height={300} data={reservesData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#00c49f" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
