import Navbar from "./Navbar";
import RouteSelect from "./RouteSelect";
import Greeting from "./Account/Greeting";

function Dashboard() {
  return (
    <div className="relative grid grid-cols-[200px_1fr]">
      <Navbar />
      <RouteSelect />
      <Greeting />
    </div>
  );
}

export default Dashboard;
