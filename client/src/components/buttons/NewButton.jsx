export default function NewButton(props) {
  const { handleSubmit } = props;

  return <button onClick={handleSubmit}>Create Recipe</button>;
}
