import { useHistory } from "react-router";

export default function HomeButton() {
  const history = useHistory();
  const goHome = () => history.push("/");

  return <button className="text-blue-900 bg-blue-500 border-2 border-gray-900  px-10 py-1 rounded-3xl mt-4 mr-2 hover:bg-blue-900 hover:text-blue-100 hover:border-black" onClick={goHome}>Home</button>;
}
