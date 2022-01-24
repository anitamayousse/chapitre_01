import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import './App.css';
import Box from "./components/Box";
import styles from "./styles/global.css"
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
          <Box icon="local_drink" color = "#3A85FF" value = "1.5" unit = "L" className={styles.box1} > Water :  </Box>
          <Box icon="directions_walk" color = "black" value = "3000" unit = "steps" className={styles.box2}> Steps: {stepsMin}</Box>
          <Box icon="wb_sunny" color = "yellow" value = "-10" unit = "°C" className={styles.box1}>Temperature: {tempMin} </Box>
          <Box icon="favorite" color = "red" value = "120" unit = "bpm" className={styles.box2}>Heart: {heartMin} </Box>
        </div>
      </div>
    );
  }
}

export default App;