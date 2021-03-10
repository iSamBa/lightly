import { useEffect, useState } from "react";
import { Header, Icon, Button, Grid } from "semantic-ui-react";
import "./style.css";
import Bridge from "./bridge";

const Bridges = () => {
  const [bridges, setBridges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/bridges")
      .then((res) => res.json())
      .then((data) => setBridges(data));
  }, []);

  const [addBridge, setAddBridge] = useState(false);

  const handleClick = () => {
    setAddBridge(!addBridge);
  };

  const addNewBridge = (bridge) => {
    setBridges([...bridges, bridge]);
  };

  const showBridgesList = () => {
    setAddBridge(false);
  };

  return (
    <div className="bridges-container">
      <Header className="bridges-header">
        <Icon name="settings" />
        <Header.Content>
          <div>
            <h2>Bridges</h2>
            {!addBridge ? (
              <Button primary onClick={handleClick}>
                Add new bridge
              </Button>
            ) : (
              <Button onClick={handleClick}>Add new bridge</Button>
            )}
          </div>
          <Header.Subheader>Manage your preferences</Header.Subheader>
        </Header.Content>
      </Header>
      {!addBridge ? (
        <Grid relaxed columns={4}>
          {bridges.reverse().map((bridge) => (
            <Grid.Column className="bridges-group">
              <Bridge key={bridge._id} bridge={bridge} />
            </Grid.Column>
          ))}
        </Grid>
      ) : (
        <h1>Not yet impelmented</h1>
      )}
    </div>
  );
};

export default Bridges;
