import './App-info.css';

export default function AppInfo({employeesSum, employeesSumIncrease}) {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании Next</h1>
      <h2>Общее число сотрудников: {employeesSum}</h2>
      <h2>Премию получат: {employeesSumIncrease}</h2>
    </div>
  );
}
