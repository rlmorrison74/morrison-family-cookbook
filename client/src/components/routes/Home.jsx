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
    <div>
      {recipes.map((recipe) => {
        return (
          <Link to={`/details/${recipe.id}`} key={recipe.id}>
                <h2 className="text-3xl font-bold">{recipe.fields.name}</h2>
                <img src={recipe.fields.image} alt={recipe.fields.name}/>
          </Link>
        );
      })}
    </div>
  );
}
