import {Component} from 'react';
import toFormAnswers from './toFormAnswers';


export default class Answers extends Component{

  initAnswers(card, changeHandler){
    return toFormAnswers(card, changeHandler);
  }

    render(){
        return (
            <form className="quation__answers">
              {this.initAnswers(this.props.card, this.props.onChange)}
            </form>
        )
    }
}



