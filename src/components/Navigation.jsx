import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <Link to="/">Dashboard</Link> ||
      <Link to="/exercises"> Exercises</Link> ||
      <Link to="/foodItems"> Food Items</Link> ||
      <Link to="/goals"> Goals</Link>
    </div>
  );
};
