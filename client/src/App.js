import Home from "./components/home";
import NavBar from "./components/nav-bar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Bridges from "./components/bridges";
import Devices from "./components/devices";
import Rooms from "./components/rooms";
import Scenes from "./components/scenes";

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
          <Route exact path="/bridges">
            <Bridges />
          </Route>
          <Route exact path="/devices">
            <Devices />
          </Route>
          <Route exact path="/rooms">
            <Rooms />
          </Route>
          <Route exact path="/scenes">
            <Scenes />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
