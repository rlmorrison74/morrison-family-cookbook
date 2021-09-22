export default function UpdateButton(props) {
  const { handleSubmit } = props;

  return (
    <button
      className="w-1/2 mx-2 bg-gray-100 text-green-500 border-green-400 border-2 hover:bg-green-600 hover:text-gray-200 focus:ring-green-400 focus:ring-offset-green-400 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      onClick={handleSubmit}
    >
      Update Recipe
    </button>
  );
}
