import { useEffect, useState } from "react";
import { Card, Header, Icon, Button } from "semantic-ui-react";
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
    <div className="devices-container">
      <Header className="devices-header">
        <Icon name="settings" />
        <Header.Content>
          <div>
            <h2>Devices</h2>
            <Button>Add new device</Button>
          </div>
          <Header.Subheader>Manage your preferences</Header.Subheader>
        </Header.Content>
      </Header>
      <Card.Group className="devices-group">
        {devices.map((device) => (
          <Device key={device._id} device={device} />
        ))}
      </Card.Group>
    </div>
  );
};

export default Devices;
