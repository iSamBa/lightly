import React from "react";
import { Button } from "semantic-ui-react";
import "./gettingStarted.css";

const GettingStarted = () => {
  return (
    <div className="container">
      <div className="introduction">
        <h1 className="title">Lightly</h1>
        <h4 className="description">
          With <span className="brand">Lightly</span> you will have a single
          point of control of all the light bridges in your house, you can
          manage and parameterize all of them from{" "}
          <span className="brand">Lightly</span>
        </h4>
        <Button color="black" className="start-btn">
          Get started !
        </Button>
      </div>
    </div>
  );
};

export default GettingStarted;
