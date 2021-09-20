export default function CreateButton(props) {
  const { handleSubmit } = props;

  return <button onClick={handleSubmit}>Create Recipe</button>;
}
