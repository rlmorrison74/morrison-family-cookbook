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

  return (
    <div>
      <form>
        <label>Image</label>
        <input
          type="text"
          placeholder="image url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <label>Recipe Name</label>
        <input
          type="text"
          placeholder="recipe name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Ingredients</label>
        <input
          type="text"
          placeholder="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <br />
        <label>Instructions</label>
        <input
          type="text"
          placeholder="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <br />
        <label>Cook time(Including Prep)</label>
        <input
          type="text"
          placeholder="cook time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <br />
        <CancelButton />
        {id ? (
          <UpdateButton handleSubmit={handleSubmit} />
        ) : (
          <CreateButton handleSubmit={handleSubmit} />
        )}
      </form>
    </div>
  );
}
