export default function Form(props) {
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
      <form onSubmit={handleSubmit}>
      <label>Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br /><label>Recipe Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Ingredients</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <br />
        <label>Instructions</label>
        <input
          type="text"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <br />
        <label>Cook time(Including Prep)</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
