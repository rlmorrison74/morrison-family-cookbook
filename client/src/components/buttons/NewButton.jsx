import { NavLink } from "react-router-dom";

export default function NewButton() {
  return (
    <NavLink to="/newrecipe" activeStyle={{ display: "none" }}>
      <button>New Recipe</button>
    </NavLink>
  );
}
