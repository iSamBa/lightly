import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

const AddDevice = () => {
  return (
    <Form>
      <Form.Field>
        <label>Name</label>
        <input placeholder="Device Name" />
      </Form.Field>
      <Form.Field>
        <label>Type</label>
        <input placeholder="Device Type" />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input placeholder="Device Description" />
      </Form.Field>
      <Button primary type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddDevice;
