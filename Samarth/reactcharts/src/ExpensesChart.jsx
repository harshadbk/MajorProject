import React from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
const data = [
  { name: "Flat", value: 1000 },
  { name: "Food", value: 500 },
  { name: "Transportation", value: 600 },
  { name: "Eating out", value: 400 },
  { name: "FLight", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8049", "#F44236"];

const ExpensesChart = () => {
  return (
    <>
      <h1>Expense chart</h1>
      <PieChart width={600} height={300}>
        <Pie data={data} dataKey="value" label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </>
  );
};

export default ExpensesChart;
