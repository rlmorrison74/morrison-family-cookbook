import HomeButton from "./buttons/HomeButton";
import NewButton from "./buttons/NewButton";


export default function Navbar() {
  const { pathname } = window.location;

  return (
    <div>
      {pathname === "/newrecipe" ? (
        <HomeButton />
      ) : (
        <div>
          <HomeButton /> <NewButton />
        </div>
      )}
    </div>
  );
}
