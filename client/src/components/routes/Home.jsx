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
    <div className="flex justify-around flex-row flex-wrap h-screen w-full bg-gray-900">
      {recipes.map((recipe) => {
        return (
          <Link to={`/details/${recipe.id}`} key={recipe.id}>
            <div className="bg-gray-400 p-4 w-1/3">
              <div className="m-2 justify-center items-center flex flex-col bg-gray-200 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-700">
                  {recipe.fields.name}
                </h2>
                <div className="m-2 flex justify-center items-center">
                  <img
                    className="object-contain h-80"
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
