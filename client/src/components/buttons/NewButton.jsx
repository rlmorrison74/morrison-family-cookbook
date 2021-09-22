import { NavLink } from "react-router-dom";

export default function NewButton() {
  return (
    <NavLink to="/newrecipe" activeStyle={{ display: "none" }}>
      <button className="bg-red-600 px-7 py-1 rounded-3xl mt-4 ml-2">New Recipe</button>
    </NavLink>
  );
}
