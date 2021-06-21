import {Component} from 'react';
import Answers from './Answers';
import finalFoo from './finalFoo';

let arrayOfAnswers = [];
let answerID = null;
let finalAnswer = null;
let checkboxArr = [];
const easyDisc = 'На данный вопрос может быть только один правильный ответ';
const hardDisc = 'На данный вопрос может быть один или несколько ответов';



export default class Card extends Component{
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    
    changeHandler(e){

        let btn = e.target.parentNode.parentNode.parentNode.lastChild.firstElementChild;
        btn.disabled = false;

        let id = Number(e.target.parentNode.parentNode.parentNode.id.split('-')[1]);

        if(e.target.name === 'checkbox'){          

            if(checkboxArr.includes(e.target.value)){
                checkboxArr.splice(checkboxArr.indexOf(e.target.value), 1);
            } else {
                checkboxArr.push(e.target.value);
            }
            
            if(checkboxArr.length === 0){
                btn.disabled = true;
            }

            answerID = id;
            finalAnswer = checkboxArr;

        } else {
            let answer = e.target.value;

            answerID = id;
            finalAnswer = answer;
        }   
    }


    clickHandler(e){
        if(e.target.className === 'quation__button') return;
        if(finalAnswer === null || finalAnswer.length === 0) return;

        let obj = {
            id: answerID,
            userAnswer: finalAnswer 
        }

        arrayOfAnswers.push(obj);
        checkboxArr = [];
        finalAnswer = null;
        answerID = null;

        if( Number(e.target.parentNode.parentNode.id.split('-')[1]) >= this.props.data.length){
            finalFoo(arrayOfAnswers, this.props.data, this.props.final)
        }

        this.props.nextQuation();
    }

    render(){
        let card = this.props.card;
        let discription = card.difficulty === 'hard' ? hardDisc : easyDisc 
        return (
            <div className="quation" id={'id-' + card.id}>
                <div className="quation__disc">{discription}</div>
                <div className="quation__text"><h3>{card.quation}</h3></div>
                <Answers card={card} onChange = {this.changeHandler}/>
                <div className="quation__button" onClick={this.clickHandler}>
                    <button disabled>Ответить</button>
                </div>
            </div>
        )
    }
}