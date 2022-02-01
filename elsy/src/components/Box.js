import React from "react";
class Box extends React.Component {

renderSlider() {
    if (this.props.unit !== "L") {
        return (
            <input
                type="range"
                min={this.props.min}
                max={this.props.max}
                value={this.props.value}
                onChange={this.props.onChange}
            />
        );
    } else {
        return null;
    }
}

    render()
    {
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{color: this.props.color,fontSize: 100}}>
                {this.props.icon} 
                </span>
                <p>{Math.round(this.props.value * 100) / 100}{this.props.unit}</p>
                {this.renderSlider()}
            </div>
        )
    }
    }


export default Box