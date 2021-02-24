import "./header.css";
import { Button } from "semantic-ui-react";

function Header() {
  return (
    <div>
      <div className="header-container">
        <div className="nav">
          <div className="brand">lightly</div>
          <div className="items">
            <Button inverted>login</Button>
            <Button inverted>Register</Button>
          </div>
        </div>
        <div className="introduction">
          <h1 className="title">Lightly</h1>
          <h4 className="description">
            This tool will allow you to add and manage light controllers of your
            home
          </h4>
          <Button secondary className="start-btn">
            Get started !
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
