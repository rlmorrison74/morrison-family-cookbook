import { useParams } from "react-router";
import { uploadImage } from "../../services";
// import { useState } from "react";
import CancelButton from "../buttons/CancelButton";
import CreateButton from "../buttons/CreateButton";
import UpdateButton from "../buttons/UpdateButton";

export default function Form(props) {
  const { id } = useParams();
  // const [nameWarning, setNameWarning] = useState("");
  // const [ingredientWarning, setIngredientWarning] = useState("");
  // const [instructionWarning, setInstructionWarning] = useState("");
  // const [timeWarning, setTimeWarning] = useState("");

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
    // setDisableSubmit,
  } = props;

  const handleChange = async (e) => {
    e.preventDefault();
    setImage(await uploadImage(e));
  };

  // const ingredientChange = (e) => {
  //   setIngredients(e.target.value);
  //   if (ingredients === "") {
  //     setIngredientWarning("no don't do that");
  //     setDisableSubmit(true);
  //   } else {
  //     setIngredientWarning("");
  //   }
  // };

  const inputStyles =
    "w-full rounded-lg border border-gray-300 sm:w-4/5 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:bg-gray-200 focus:outline-none";

  return (
    <div>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-2/3 lg:w-2/5 xl:w-1/3"
        >
          {id ? (
            <h2 className="text-xl font-bold mt-5 border-b-2 pb-4 border-blue-200 select-none">
              Edit Recipe
            </h2>
          ) : (
            <h2 className="text-xl font-bold mt-5 border-b-2 pb-4 border-blue-200 select-none">
              New Recipe
            </h2>
          )}
          <div className="flex flex-col items-center border-2 shadow-2xl bg-gray-100 border-gray-300 m-4 mb-8 rounded-3xl px-4 py-10">
            <h2 className="font-semibold mb-2">Recipe Image</h2>
            {/* lines 46-57 were a custom file upload button I got from https://codepen.io/shuvroroy/pen/VEJGpX */}
            <label className="w-64 flex flex-col items-center px-2 py-2 bg-gray-100 text-blue rounded-lg shadow-lg tracking-wide uppercase border-2 border-blue-200 cursor-pointer hover:bg-blue-600 hover:text-gray-200 transform hover:scale-105 duration-300 ease-in-out">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">
                Select a file
              </span>
              <input type="file" className="hidden" onChange={handleChange} />
            </label>
            <div className="w-64 overflow-hidden">
              <h1 className="mt-2 text-xs tracking-tighter">Image Selected!</h1>
            </div>
            <br />
            <label className="sr-only">Recipe Name</label>
            <input
              autoFocus
              className={inputStyles}
              type="text"
              placeholder="recipe name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            {/* <h1>{nameWarning}</h1> */}
            <label className="sr-only">Ingredients</label>
            <input
              className={inputStyles}
              type="text"
              placeholder="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            <br />
            {/* <h1>{ingredientWarning}</h1> */}
            <label className="sr-only">Instructions</label>
            <input
              className={inputStyles}
              type="text"
              placeholder="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
            <br />
            {/* <h1>{instructionWarning}</h1> */}
            <label className="sr-only">Cook time(Including Prep)</label>
            <input
              className={inputStyles}
              type="text"
              placeholder="cook time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <br />
            {/* <h1>{timeWarning}</h1> */}
          </div>
          <div className="flex">
            {id ? (
              <UpdateButton handleSubmit={handleSubmit} image={image} />
            ) : (
              <CreateButton handleSubmit={handleSubmit} image={image} />
            )}
            <CancelButton />
          </div>
        </form>
      </div>
    </div>
  );
}
