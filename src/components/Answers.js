import {Component} from 'react';
import toFormAnswers from './toFormAnswers';


export default class Answers extends Component{

  initAnswers(card, foo){
    return toFormAnswers(card, foo);
  }

    render(){
        return (
            <form className="quation__answers">
              {this.initAnswers(this.props.card, this.props.changeHandler)}
            </form>
        )
    }
}



