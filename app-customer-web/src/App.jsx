import axios from "axios";
import NavBar from "./components/Navbar";
import RouteSelect from "./components/RouteSelect";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="debug-outlines">
      <div className="h-dvh grid grid-rows-[80px_1fr]">
        <NavBar />
        <RouteSelect />
      </div>
    </div>
  );
}

export default App;
