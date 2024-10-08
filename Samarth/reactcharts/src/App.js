import "./App.css";
import BarChart from "./BarChart";
import ExpensesChart from "./ExpensesChart";
import PopularityCharts from "./PopularityCharts";

function App() {
  return (
    <div className="App">
      <PopularityCharts />
      <ExpensesChart />
      <BarChart />
    </div>
  );
}

export default App;
