import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRecipes } from "../../services";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      setRecipes(await getRecipes());
    };
    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center bg-cover headerBackground">
      <div className="flex justify-center items-center flex-row flex-wrap h-full w-full">
        {recipes.map((recipe) => {
          return (
            <Link
              className="mt-4 w-full sm:w-1/2 lg:w-1/3 p-2 flex justify-center transform hover:scale-105 duration-500 ease-in-out"
              to={`/details/${recipe.id}`}
              key={recipe.id}
            >
              <div className="m-2 h-72 w-full justify-center items-center flex flex-col bg-gray-800 bg-opacity-40 rounded-xl">
                <div className="mb-2 h-full w-full rounded-lg overflow-hidden">
                  <img
                    className="h-full w-full"
                    src={recipe.fields.image}
                    alt={recipe.fields.name}
                  />
                </div>
                <h2 className="text-2xl font-bold text-blue-200 opacity-100">
                  {recipe.fields.name}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
