import { Link } from "react-router-dom";

export default function EditButton(props) {
  const { id } = props;
  return (
    <Link to={`/details/${id}/edit`} key={id}>
      <button className="w-full bg-gray-100 text-green-500 border-green-400 border-2 hover:bg-green-600 hover:text-gray-200 focus:ring-green-400 focus:ring-offset-green-400 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        Edit Recipe
      </button>
    </Link>
  );
}
