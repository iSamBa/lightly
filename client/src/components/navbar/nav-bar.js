import "./navbar.css";
import { useState } from "react";
import { Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState({ activeItem: "home" });
  let history = useHistory();

  const handleItemClick = (e, { name }) => {
    setActiveItem({ activeItem: name });
    history.push("/" + name);
  };

  return (
    /*<div className="nav">
      <div className="brand">lightly</div>
      <div className="items">
        <Button inverted>login</Button>
        <Button inverted>Register</Button>
      </div>
    </div>*/
    <Menu>
      <Menu.Item
        header
        name=""
        active={activeItem === "home"}
        onClick={handleItemClick}
      >
        Lightly
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          name="Devices"
          active={activeItem === "devices"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Login"
          active={activeItem === "login"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Register"
          active={activeItem === "register"}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
