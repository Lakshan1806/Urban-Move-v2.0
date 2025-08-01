import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Rent from "../pages/Rent";
import Ride from "../pages/Ride";
import Drive from "../pages/Drive";

function RouteSelect() {
  const userId = localStorage.getItem("userId");

  return (
    <main className="h-full min-h-0 w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/ride" element={<Ride />} />
        <Route path="/drive" element={<Drive />} />
      </Routes>
    </main>
  );
}

export default RouteSelect;
