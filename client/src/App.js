import Home from "./components/home";
import NavBar from "./components/nav-bar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
