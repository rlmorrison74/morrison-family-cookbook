import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/routes/Home";
import Details from "./components/routes/Details";
import Edit from "./components/routes/Edit";
import New from "./components/routes/New";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
