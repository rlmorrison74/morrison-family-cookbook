import { useHistory } from "react-router";

export default function HomeButton() {
  const history = useHistory();
  const goHome = () => history.push("/");

  return <button className="bg-red-600 px-10 py-1 rounded-3xl mt-4 mr-2 hover:bg-red-500" onClick={goHome}>Home</button>;
}
