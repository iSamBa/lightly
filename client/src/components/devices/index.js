import { useEffect, useState } from "react";
import { Card, Header, Icon } from "semantic-ui-react";
import Device from "./device";
import "./devices.css";

const Devices = () => {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/devices")
      .then((res) => res.json())
      .then((data) => setDevices(data));
  }, []);
  return (
    <div class="devices-container">
      <Header className="devices-header" as="h2">
        <Icon name="settings" />
        <Header.Content>
          Devices
          <Header.Subheader>Manage your preferences</Header.Subheader>
        </Header.Content>
      </Header>
      <hr></hr>
      <Card.Group className="devices-group">
        {devices.map((device) => (
          <Device key={device._id} device={device} />
        ))}
      </Card.Group>
    </div>
  );
};

export default Devices;
