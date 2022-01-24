import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import './App.css';
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
          <p>
          Heart : {heartMin}
          Temperature : {tempMin}
          Steps : {stepsMin}
          </p>
        </div>
        <h1 className="text-primary">Hello !</h1>
      </div>
    );
  }
}

export default App;