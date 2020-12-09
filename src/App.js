import "./App.css";
import Create from "./pages/Create";
import Update from "./pages/Update";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Create} />;
          <Route path="/update/:id" component={Update} />;
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
