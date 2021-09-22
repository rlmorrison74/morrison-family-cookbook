import { NavLink } from "react-router-dom";

export default function NewButton() {
  return (
    <NavLink to="/newrecipe" activeStyle={{ display: "none" }}>
      <button className="text-blue-900 bg-blue-500 border-2 border-gray-900  px-7 py-1 rounded-3xl mt-4 ml-2 hover:text-blue-100 hover:bg-blue-900">New Recipe</button>
    </NavLink>
  );
}
