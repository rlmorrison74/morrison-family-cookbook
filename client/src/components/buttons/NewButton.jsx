import { NavLink } from "react-router-dom";

export default function NewButton() {
  return (
    <NavLink to="/newrecipe" activeStyle={{ display: "none" }}>
      <button className="text-xl font-semibold px-2 text-blue-900 hover:text-blue-100">New Recipe</button>
    </NavLink>
  );
}
