import { Component } from "react";

export default class Radio extends Component{

    render(){
        return (
            <div className="radio">
              <input id={this.props.id} type="radio" name="radio"
              value={this.props.answerText} onChange={this.props.changeHandler}></input>
              <label htmlFor={this.props.id}>{this.props.answerText}</label>
            </div>
        )
    }
}