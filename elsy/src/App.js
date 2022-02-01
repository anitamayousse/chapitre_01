import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import './App.css';
import Box from "./components/Box";
import "./styles/global.css"
const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;
const waterMin = 1.5;
class App extends React.Component {
  constructor () {
  super ();
  
  this.state = {
    water : waterMin,
    heart : 120,
    temperature : -10,
    steps  : 3000,
  };
  this.onHeartChange = this.onHeartChange.bind(this);
  this.onTemperatureChange = this.onTemperatureChange.bind(this);
  this.onStepsChange = this.onStepsChange.bind(this);
  this.calculateWater = this.calculateWater.bind(this);
  }
onHeartChange(e){
  this.setState((prevState) => {
    return this.calculateWater({
      ...prevState,
      heart: e.target.value,
    });
  });
}

onTemperatureChange(e){
  this.setState((prevState) => {
    return this.calculateWater({
      ...prevState,
      temperature: e.target.value,
    });
  });
}

onStepsChange(e){
  this.setState((prevState) => {
    return this.calculateWater({
      ...prevState,
      steps: e.target.value,
    });
  });
}

calculateWater (newState){
  const tempIncrement = 0.02 * Math.max(newState.temperature - tempMin, 0);
  const heartIncrement = 0.0008 * Math.max(newState.heart - heartMin, 0);
  const stepsIncrement = 0.00002 * Math.max(newState.steps - stepsMin, 0)
  return {
    ...newState,
    water : waterMin + tempIncrement + heartIncrement + stepsIncrement,
  } 
}

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <h1 className="text-primary">Hello !</h1>
        {/*water box */}
          <Box icon="local_drink" color = "#3A85FF" value = {this.state.water} unit = "L" />
        {/*steps box */}
          <Box 
          icon="directions_walk" 
          color = "black" 
          value = {this.state.steps} 
          min={stepsMin}
          max={stepsMax}
          onChange={this.onStepsChange} 
          unit = "steps" /> 
        {/*temperature box */}
          <Box 
          icon="wb_sunny" 
          color = "yellow" 
          value = {this.state.temperature} 
          min={tempMin}
          max={tempMax}
          onChange={this.onTemperatureChange} 
          unit = "°C" />
        {/*heart box */}
          <Box 
            icon="favorite" 
            color = "red" 
            value = {this.state.heart} 
            min={heartMin}
            max={heartMax}
            onChange={this.onHeartChange} 
            unit = "bpm"/>
        </div>
      </div>
    );
  }
}

export default App;