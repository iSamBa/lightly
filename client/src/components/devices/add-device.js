import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const AddDevice = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const handleClick = () => {
    fetch("http://localhost:5000/api/devices", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, type, description }),
    }).then(() => {
      props.action({ name, type, description });
      setTimeout(() => {
        props.showList();
      }, 1000);
    });
  };
  return (
    <Form>
      <Form.Field>
        <label>Name</label>
        <input
          placeholder="Device Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Type</label>
        <input
          placeholder="Device Type"
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          placeholder="Device Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Form.Field>
      <Button primary onClick={handleClick}>
        Add
      </Button>
    </Form>
  );
};

export default AddDevice;
