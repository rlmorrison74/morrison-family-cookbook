import { useHistory } from "react-router";

export default function NewButton() {
    const history = useHistory()
    const makeNew = () => history.push("/newrecipe")
    
    return <button onClick={makeNew}>New Recipe</button>
}