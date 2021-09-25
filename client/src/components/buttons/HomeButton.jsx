import { useHistory } from "react-router";

export default function HomeButton() {
  const history = useHistory();
  const goHome = () => history.push("/");

  return (
    <button
      className="text-xl font-semibold px-2 text-blue-900 hover:text-blue-100 hover:border-black"
      onClick={goHome}
    >
      Home
    </button>
  );
}
