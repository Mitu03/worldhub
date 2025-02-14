import React from "react";

function DataofAll({ population, growth, life, literacy }) {
  return (
    <div className="DataofAll">
      <ul>
        <li>
          <strong>Total Population:</strong>{" "}
          {population.length > 0 ? population[0].value : "N/A"}
        </li>
        <li>
          <strong>Population Growth Rate:</strong>
          {""}
          {growth ? growth[0].value : "N/A"}
        </li>
        <li>
          <strong>Life Expectancy:</strong>{" "}
          {life.length > 0 ? life[0].value : "N/A"} years
        </li>
        <li>
          <strong>Literacy Rate:</strong>{" "}
          {literacy.length > 0 ? literacy[0].value : "N/A"}%
        </li>
      </ul>
    </div>
  );
}

export default DataofAll;
