export default function UpdateButton(props) {
  const { handleSubmit } = props;

  return <button onClick={handleSubmit}>Update Recipe</button>;
}
