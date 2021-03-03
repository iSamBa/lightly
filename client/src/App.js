import Home from "./components/home/home";
import NavBar from "./components/navbar/nav-bar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Bridges from "./components/bridges";
import Devices from "./components/devices";
import Rooms from "./components/rooms";
import Scenes from "./components/scenes";
import NotFound from "./components/not-found/index";

function App() {
  return (
    <div className="main-app">
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
