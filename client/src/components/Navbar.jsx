import HomeButton from "./buttons/HomeButton";
import NewButton from "./buttons/NewButton";

export default function Navbar() {
  return (
    <div className="flex flex-col headerBackground p-4">
      <h1 className="text-6xl text-gray-900 font-black carattere pt-6 flex justify-center items-center select-none">
        Morrison Family Cookbook
      </h1>
      <div className="flex justify-center">
        <HomeButton /> <NewButton />
      </div>
    </div>
  );
}
