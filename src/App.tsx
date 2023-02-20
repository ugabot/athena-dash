import React from "react";
import "./App.scss";
import { useDataApi } from "./api/hooks/use-data-api";
import { DataDisplay } from "./components/data-display";
import { MainCard } from "./components/main-card";
import { formatChartData } from "./modules/format-chart-data";

const App = () => {
  const { data: users, error, loading, errorMsg } = useDataApi();

  const placeholderData = [
    ["Benjamin", 50000],
    ["Jasmine", 20000],
  ];

  const placeholderLegend = [
    ["Benjamin", 70],
    ["Jasmine", 68],
  ];

  let chart, legend;
  let totalIncome = 500000;
  if (users) {
    const { chartData, legendData } = formatChartData(users);
    chart = chartData;
    legend = legendData;
    totalIncome = chartData
      .map((dataPoint) => dataPoint[1] as number)
      .reduce((acc, income) => {
        return acc + income;
      }, 0);
  }

  return (
    <div id="App">
      {loading && <h3>LOADING...</h3>}
      {error && <h3>{errorMsg}</h3>}
      {users ? (
        <>
          <MainCard
            users={users}
            chartData={chart || placeholderData}
            legendData={legend || placeholderLegend}
            totalIncome={Intl.NumberFormat("en", {
              notation: "compact",
            }).format(totalIncome)}
          />
          <DataDisplay users={users} error={error} />
        </>
      ) : null}
    </div>
  );
};

export default App;
