import { Routes, Route } from "react-router-dom";

import { Exercise } from "./pages/Exercise";
import { Food } from "./pages/Food";
import { Goal } from "./pages/Goal";
import { Dashboard } from "./pages/Dashboard";
import { Navigation } from "./components/Navigation";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/exercises" element={<Exercise />} />
        <Route path="/foodItems" element={<Food />} />
        <Route path="/goals" element={<Goal />} />
      </Routes>
    </div>
  );
}
