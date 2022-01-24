import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import './App.css';
import Box from "./components/Box";
import Styles from "./styles/global.css"
const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <h1 className="text-primary">Hello !</h1>
          <p>
          Heart : {heartMin}
          </p>
          <p>
          Temperature : {tempMin}
          </p>
          <p>
          <Box icon="local_drink" color = "#3A85FF" value = "1.5" unit = "L" > </Box> Steps : {stepsMin} 
          </p>
          <Box>Water</Box>
          <Box>Steps</Box>
          <Box>Heart</Box>
          <Box>Temperature</Box>
          
        </div>
      </div>
    );
  }
}

export default App;