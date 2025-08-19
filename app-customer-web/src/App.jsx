import axios from "axios";
import NavBar from "./components/Navbar";
import RouteSelect from "./components/RouteSelect";
import Footer from "./components/Footer";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="debug-outlines">
      <div className="grid h-dvh w-dvw grid-rows-[80px_1fr]">
        <NavBar />
        <RouteSelect />
      </div>
    </div>
  );
}

export default App;
