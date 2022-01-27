import React from "react";
class Box extends React.Component {

    render()
    {
          if (this.props.icon !== "local_drink" ) { 
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{color: this.props.color,fontSize: 100}}>
                {this.props.icon} 
                </span>
                <p>{this.props.value}{this.props.unit}</p>
            </div>,
            <div>
            <input
            onChange={this.handleChange}
            onInput={this.props.value}
            type="range" id="volume" name="volume"
            min="0" max="11" />
            </div>
        )
    }
    }
}

export default Box