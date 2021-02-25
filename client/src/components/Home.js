import "./home.css";
import { Button } from "semantic-ui-react";

function Home() {
  return (
    <div className="home-container">
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
  );
}

export default Home;
