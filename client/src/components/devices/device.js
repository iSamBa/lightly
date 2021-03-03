import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import philipsHueLogo from "../../assets/brands-images/Philips_hue.png";

const Device = (props) => {
  return (
    <Card key={props.device._id}>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src={philipsHueLogo}
          alt="philips-hue"
        />
        <Card.Header>{props.device.name}</Card.Header>
        <Card.Meta>{props.device.type}</Card.Meta>
        <Card.Description>{props.device.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button color="green">Edit</Button>
          <Button color="red">Delete</Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Device;
