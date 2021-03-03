import React from "react";
import { Button } from "semantic-ui-react";
import "./gettingStarted.css";

const GettingStarted = () => {
  return (
    <div className="getting-started-container">
      <div className="introduction">
        <h1 className="title">Lightly</h1>
        <h4 className="description">
          Manage all the light controlling systems of your house from a single
          place
        </h4>
        <Button color="black" className="start-btn">
          Get started !
        </Button>
      </div>
    </div>
  );
};

export default GettingStarted;
