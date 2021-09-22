import { useParams } from "react-router";
import CancelButton from "../buttons/CancelButton";
import CreateButton from "../buttons/CreateButton";
import UpdateButton from "../buttons/UpdateButton";

export default function Form(props) {
  const { id } = useParams();

  const {
    name,
    setName,
    ingredients,
    setIngredients,
    instructions,
    setInstructions,
    time,
    setTime,
    image,
    setImage,
    handleSubmit,
  } = props;

  const inputStyles =
    "m-2 rounded-lg border border-gray-300 w-4/5 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:bg-gray-200 focus:outline-none";

  return (
    <div>
      <div className="flex justify-center">
        <form className="w-full sm:w-2/3 lg:w-2/5 xl:w-1/3">
          {id ? (
            <h2 className="text-xl font-bold mt-5 border-b-2 pb-4 border-blue-200 select-none">
              Edit Recipe
            </h2>
          ) : (
            <h2 className="text-xl font-bold mt-5 border-b-2 pb-4 border-blue-200 select-none">
              New Recipe
            </h2>
          )}
          <div className="border-2 shadow-2xl border-gray-300 m-4 mb-8 rounded-3xl px-4 py-10">
            <label className="sr-only">Image</label>
            <input
              autoFocus
              className={inputStyles}
              type="text"
              placeholder="image url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <br />
            <label className="sr-only">Recipe Name</label>
            <input
              className={inputStyles}
              type="text"
              placeholder="recipe name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label className="sr-only">Ingredients</label>
            <input
              className={inputStyles}
              type="text"
              placeholder="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            <br />
            <label className="sr-only">Instructions</label>
            <input
              className={inputStyles}
              type="text"
              placeholder="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
            <br />
            <label className="sr-only">Cook time(Including Prep)</label>
            <input
              className={inputStyles}
              type="text"
              placeholder="cook time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="flex">
            {id ? (
              <UpdateButton handleSubmit={handleSubmit} />
            ) : (
              <CreateButton handleSubmit={handleSubmit} />
            )}
            <CancelButton />
          </div>
        </form>
      </div>
    </div>
  );
}
