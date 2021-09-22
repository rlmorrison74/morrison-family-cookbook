import { useHistory } from "react-router";
import { useParams } from "react-router";

export default function CancelButton() {
  const { id } = useParams();
  const history = useHistory();

  const handleCancel = () => {
    id ? history.push(`/details/${id}`) : history.push("/");
  };

  return (
    <button
      onClick={handleCancel}
      className="w-1/2 mx-2 bg-gray-100 text-red-500 border-red-400 border-2 hover:bg-red-600 hover:text-gray-200 focus:ring-red-400 focus:ring-offset-red-400 font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "    >
      Cancel
    </button>
  );
}
