import React from "react";
import notFoundImg from "../../assets/page-not-found.svg";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import "./style.css";

const NotFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };
  return (
    <div className="container">
      <img className="not-found-img" src={notFoundImg} alt="page not found" />
      <h3>Sorry but the page you are trying to reach does not exist</h3>
      <Button color="black" onClick={handleClick}>
        Back
      </Button>
    </div>
  );
};

export default NotFound;
