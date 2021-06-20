import {Component} from 'react';
import Answers from './Answers';

export default class Card extends Component{
    constructor(props){
        super(props);
        this.takeValue = this.takeValue.bind(this);
    }
    takeValue(e){
        console.log(e.target);
    }
    render(){
        return (
            <div className="quation">
            <div className="quation__disc">На данный вопрос может быть только один правильный ответ</div>
            <div className="quation__text"><h3>{this.props.card.quation}</h3></div>
            <Answers card={this.props.card}/>
            <div className="quation__button" onClick={this.takeValue}><button>Ответить</button></div>
          </div>
        )
    }
}