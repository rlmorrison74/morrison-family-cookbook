import { deleteRecipe } from "../../services";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

export default function DeleteButton(props) {
  const history = useHistory();

  const handleDelete = async () => {
    await deleteRecipe(props.id);
    toast("Recipe deleted");
    history.push("/");
  };

  return (
    <button
      className="w-full bg-gray-100 text-red-500 border-red-400 border-2 hover:bg-red-600 hover:text-gray-200 focus:ring-red-400 focus:ring-offset-red-400 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}
