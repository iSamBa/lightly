import "./navbar.css";
import { Button } from "semantic-ui-react";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="brand">lightly</div>
      <div className="items">
        <Button inverted>login</Button>
        <Button inverted>Register</Button>
      </div>
    </div>
  );
};

export default NavBar;
