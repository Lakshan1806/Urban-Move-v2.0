import axios from "axios";
import NavBar from "./components/Navbar";
import RouteSelect from "./components/RouteSelect";
import Footer from "./components/Footer";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="debug-outlines">
      <div className="no-scrollbar relative h-dvh overflow-auto">
        <NavBar />
        <RouteSelect />
        <Footer />
      </div>
    </div>
  );
}

export default App;
