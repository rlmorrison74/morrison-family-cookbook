import { useHistory } from "react-router";

export default function HomeButton() {
  const history = useHistory();
  const goHome = () => history.push("/");

  return <button onClick={goHome}>Home</button>;
}
