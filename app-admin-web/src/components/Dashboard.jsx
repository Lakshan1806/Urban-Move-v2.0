import Navbar from "./Navbar";
import RouteSelect from "./RouteSelect";

function Dashboard() {
  return (
    <div className="relative grid grid-cols-[200px_1fr]">
      <Navbar />
      <RouteSelect />
    </div>
  );
}

export default Dashboard;
