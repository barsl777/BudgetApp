import "./styles.css";
import OverallBudgetInfo from "./components/OverallBudgetInfo.component";
import InsertIncExp from "./components/InsertIncExp.component";
import IncomeList from "./components/IncomeList.component";
import ExpenseList from "./components/ExpenseList.component";

export default function App() {
  return (
    <div className="App">
      <OverallBudgetInfo />
      <div className="bottom">
        <InsertIncExp />
        <div className="container clearfix">
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </div>
  );
}
