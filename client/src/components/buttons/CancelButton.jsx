import { useHistory } from "react-router";
import { useParams } from "react-router";

export default function CancelButton() {
  const { id } = useParams();
  const history = useHistory();

  const handleCancel = () => {
    id ? history.push(`/details/${id}`) : history.push("/");
  };

  return <button onClick={handleCancel}>Cancel</button>;
}
