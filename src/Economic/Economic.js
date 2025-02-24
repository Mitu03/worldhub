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
    <div className="economic----">
      <div className="economic---searchBar">
        <h1 className="economic---searchBar--heading">Economic Indicators</h1>
        <SearchBar onCountry={handleCountrySelect} />
      </div>

      <div className="economic---MainContent">
        <div className="economic---MainContent--child1 Chart-container ">
          <h2 className="economic---MainContent-head">GDP Trend</h2>
          <ResponsiveContainer>
            <LineChart width={350} height={300} data={gdpData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="date" tick={{ fill: "#FFFFFF" }} />
              <YAxis tick={{ fill: "#FFFFFF" }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="Chart-container economic---MainContent--child2">
          <h2 className="economic---MainContent-head">Inflation Trend</h2>
          <ResponsiveContainer>
            <BarChart width={350} height={300} data={inflatation}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fill: "#FFFFFF" }} />
              <YAxis tick={{ fill: "#FFFFFF" }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="Chart-container  economic---MainContent--child3">
          <h2 className="economic---MainContent-head">Unemployment Rate</h2>
          <ResponsiveContainer>
            <LineChart width={350} height={300} data={unemployment}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="date" tick={{ fill: "#FFFFFF" }} />
              <YAxis tick={{ fill: "#FFFFFF" }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="Chart-container economic---MainContent--child4">
          <h2 className="economic---MainContent-head">External Debt</h2>
          <ResponsiveContainer>
            <LineChart width={350} height={300} data={debtData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="date" tick={{ fill: "#FFFFFF" }} />
              <YAxis tick={{ fill: "#FFFFFF" }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#ff0000" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="Chart-container economic---MainContent--child5">
          <h2 className="economic---MainContent-head">Foreign Reserves</h2>
          <ResponsiveContainer>
            <LineChart width={350} height={300} data={reservesData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="date" tick={{ fill: "#FFFFFF" }} />
              <YAxis tick={{ fill: "#FFFFFF" }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#00c49f" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
