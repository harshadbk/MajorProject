import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "2017", react: 32, angular: 37, vue: 60 },
  { name: "2018", react: 42, angular: 42, vue: 54 },
  { name: "2019", react: 51, angular: 41, vue: 54 },
  { name: "2020", react: 60, angular: 37, vue: 28 },
  { name: "2021", react: 51, angular: 31, vue: 27 },
  { name: "2022", react: 95, angular: 44, vue: 49 },
  { name: "2023", react: 73, angular: 31, vue: 42 },
  { name: "2024", react: 69, angular: 27, vue: 50 },
];

const PopularityCharts = () => {
  return (
    <>
      <h1>Javascript Framework popularity</h1>
      <LineChart width={600} height={300} data={data}>
        <Line
          type={"monotone"}
          dataKey="react"
          stroke="#2196F3"
          strokeWidth={3}
        />
        <Line
          type={"monotone"}
          dataKey="angular"
          stroke="#FFCA29"
          strokeWidth={3}
        />
        <Line
          type={"monotone"}
          dataKey="vue"
          stroke="#F44236"
          strokeWidth={3}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </>
  );
};

export default PopularityCharts;
