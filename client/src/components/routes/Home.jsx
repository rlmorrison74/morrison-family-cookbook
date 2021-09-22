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
    <div className="flex justify-around flex-row flex-wrap h-screen w-100 bg-gradient-to-b from-blue-200 to-blue-800 bg-repeat">
      {recipes.map((recipe) => {
        return (
          <Link
            className="w-1/3 sm:w-1/2 lg:w-1/3 p-2"
            to={`/details/${recipe.id}`}
            key={recipe.id}
          >
            <div className="h-full m-2">
              <div className="m-2 h-full w-full justify-center items-center flex flex-col bg-gray-200 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-700">
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
            </div>
          </Link>
        );
      })}
    </div>
  );
}
