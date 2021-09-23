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
    <div className="min-h-screen flex justify-center bg-cover bg-gradient-to-t from-blue-900 bg-repeat">
      <div className="flex justify-center flex-row flex-wrap h-full w-screen ">
        {recipes.map((recipe) => {
          return (
            <Link
              className="mt-4 w-full sm:w-1/2 lg:w-1/3 p-2 flex justify-center transform hover:scale-105 duration-500 ease-in-out"
              to={`/details/${recipe.id}`}
              key={recipe.id}
            >
              <div className=" h-full w-3/4 justify-center items-center flex flex-col bg-pink-600 bg-opacity-20 rounded-xl">
                <h2 className="text-2xl font-bold text-blue-900">
                  {recipe.fields.name}
                </h2>
                <div className="my-2 h-40 w-40 overflow-hidden">
                  <img
                    className="object-cover h-full w-full object-center"
                    src={recipe.fields.image}
                    alt={recipe.fields.name}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
