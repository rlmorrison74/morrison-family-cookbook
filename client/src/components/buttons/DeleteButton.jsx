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

  return <button onClick={handleDelete}>Delete</button>;
}
