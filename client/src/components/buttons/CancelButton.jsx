import { useHistory } from "react-router";

export default function CancelButton() {
  const history = useHistory();

  const handleCancel = () => history.push("/");

  return <button onClick={handleCancel}>Cancel</button>;
}
