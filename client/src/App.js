import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/routes/Home";
import Details from "./components/routes/Details";
import Edit from "./components/routes/Edit";
import New from "./components/routes/New";

function App() {
  return (
    <div className="App">
      <Navbar path="*/:id"/>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/details/:id">
        <Details />
      </Route>
      <Route path="/details/:id/edit">
        <Edit />
      </Route>
      <Route path="/newrecipe">
        <New />
      </Route>
      <ToastContainer />
    </div>
  );
}

export default App;
