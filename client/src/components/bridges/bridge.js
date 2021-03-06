import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import philipsHueLogo from "../../assets/brands-images/Philips_hue.png";

const Bridge = (props) => {
  return (
    <Card key={props.bridge._id}>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src={philipsHueLogo}
          alt="philips-hue"
        />
        <Card.Header>{props.bridge.name}</Card.Header>
        <Card.Meta>{props.bridge.type}</Card.Meta>
        <Card.Description>{props.bridge.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button circular icon="edit"></Button>
          <Button circular icon="delete"></Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Bridge;
