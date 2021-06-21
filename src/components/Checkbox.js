import { Component } from "react";

export default class Checkbox extends Component{
    render(){
        return (
            <div className="checkbox">
              <input id={this.props.id} type="checkbox" name="checkbox" 
              value={this.props.answerText} onChange={this.props.changeHandler}></input>
              <label htmlFor={this.props.id}>{this.props.answerText}</label>
            </div>
        )
    }
}