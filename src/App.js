import "./App.css";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Create} />;
          <Route path="/update/:id" component={Update} />;
          <Route path="/login" component={Login} />;
          <Route path="/signup" component={Signup} />;
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
