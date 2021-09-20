import { Link } from "react-router-dom";

export default function EditButton(props) {
  const { id } = props;
  return (
    <Link to={`/details/${id}/edit`} key={id}>
      <button>Edit Recipe</button>
    </Link>
  );
}
