import { useEffect, useState } from "react";
import { Card, Header, Icon, Button } from "semantic-ui-react";
import Device from "./device";
import AddDevice from "./add-device";
import "./devices.css";

const Devices = () => {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/devices")
      .then((res) => res.json())
      .then((data) => setDevices(data));
  }, []);

  const [addDevice, setAddDevice] = useState(false);

  const handleClick = () => {
    setAddDevice(!addDevice);
  };

  const showDevicesList = () => {
    setAddDevice(false);
  };

  return (
    <div className="devices-container">
      <Header className="devices-header">
        <Icon name="settings" />
        <Header.Content>
          <div>
            <h2>Devices</h2>
            {!addDevice ? (
              <Button primary onClick={handleClick}>
                Add new device
              </Button>
            ) : (
              <Button onClick={handleClick}>Add new device</Button>
            )}
          </div>
          <Header.Subheader>Manage your preferences</Header.Subheader>
        </Header.Content>
      </Header>
      {!addDevice ? (
        <Card.Group className="devices-group">
          {devices.map((device) => (
            <Device key={device._id} device={device} />
          ))}
        </Card.Group>
      ) : (
        <AddDevice showList={showDevicesList} />
      )}
    </div>
  );
};

export default Devices;
