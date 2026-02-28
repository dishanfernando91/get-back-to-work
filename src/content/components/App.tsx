import "./app.css";
import { WebsiteStat } from "./WebsiteStat";

const timeframes = ["Today", "This week", "This month", "All time"];

function App() {
  return (
    <div className="page-wrapper">
      <h1 className="main-message">Get back to work, please.</h1>

      <div className="glass-box">
        <header className="filter-header">
          {timeframes.map((time) => (
            <button key={time} className="nav-button">
              {time}
            </button>
          ))}
        </header>

        <div className="box-body">
          <WebsiteStat label="Active Sessions" value={1284} />
          <WebsiteStat label="Data Processed" value={45902} />
          <WebsiteStat label="Total Incidents" value={12} />
        </div>
      </div>
    </div>
  );
}

export default App;
