import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../../services";
import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";

export default function Details() {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      setRecipe(await getRecipe(id));
      setLoading(false);
    };
    fetchRecipe();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex justify-center m-4">
        <div className="h-40 w-40 rounded-xl overflow-hidden shadow-xl">
          <img
            className="object-cover h-full w-full object-center"
            src={recipe.image}
            alt={recipe.name}
          />
        </div>
      </div>
      <div className="w-5/6 md:w-3/5 flex flex-col justify-center px-4 leading-loose border-2 border-gray-400  rounded-2xl shadow-2xl">
        <h2 className="text-xl font-semibold">{recipe.name}</h2>
        <h4 className="mt-2">
          <span className="font-semibold">Ingredients: </span>
          {recipe.ingredients}
        </h4>
        <h4>
          <span className="font-semibold">How to make:</span>{" "}
          {recipe.instructions}
        </h4>
        <h4>
          <span className="font-semibold">Total time til dinner:</span>{" "}
          {recipe.time}
        </h4>
      </div>
      <div className="m-5 flex w-5/6 md:w-3/5">
        <div className="w-1/2 m-1">
          <EditButton id={id} />
        </div>
        <div className="w-1/2 m-1">
          <DeleteButton id={id} />
        </div>
      </div>
    </div>
  );
}
