import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function RouteSelect() {
  const userId = localStorage.getItem("userId");

  return (
    <main className="h-full min-h-0">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default RouteSelect;
