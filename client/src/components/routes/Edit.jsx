import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getRecipe, setRecipe } from "../../services";
import Form from "./Form";

export default function Edit() {
  // toast("Recipe updated!")

  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await getRecipe(id);
      setImage(res.image);
      setName(res.name);
      setIngredients(res.ingredients);
      setInstructions(res.instructions);
      setTime(res.time);
    };
    fetchRecipe();
    // eslint-disable-next-line
  }, []);
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      ingredients,
      instructions,
      time,
      image,
    };
    // eslint-disable-next-line
    const res = await setRecipe(id, fields);
    history.push(`/details/${id}`);
  };

  return (
    <div>
      <h3>Edit Recipe</h3>
      <Form
        name={name}
        setName={setName}
        ingredients={ingredients}
        setIngredients={setIngredients}
        instructions={instructions}
        setInstructions={setInstructions}
        time={time}
        setTime={setTime}
        image={image}
        setImage={setImage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
