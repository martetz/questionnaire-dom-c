import {Component} from 'react';
import Answers from './Answers';
import finalFoo from './finalFoo';

let arrayOfAnswers = [];
// let arrayOfHardAnswers = [];
let answerID = null;
let finalAnswer = null;
let checkboxArr = [];



export default class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            display: 'none',
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }


    changeHandler(e){

        if(e.target.name === 'checkbox'){
            let id = Number(e.target.parentNode.parentNode.parentNode.id.split('-')[1]);

            if(checkboxArr.includes(e.target.value)){
                checkboxArr.splice(checkboxArr.indexOf(e.target.value), 1);
            } else {
                checkboxArr.push(e.target.value);
            }

            // console.log(checkboxArr); 
            answerID = id;
            finalAnswer = checkboxArr;

        } else {
            // console.log(e.target);
            let id = Number(e.target.parentNode.parentNode.parentNode.id.split('-')[1]);
            let answer = e.target.value;
            answerID = id;
            finalAnswer = answer;
        }   
    }


    clickHandler(e){
        if(e.target.className === 'quation__button') return;
        if(finalAnswer === null)  return;

        let obj = {
            id: answerID,
            userAnswer: finalAnswer 
        }

        arrayOfAnswers.push(obj);
        console.log(arrayOfAnswers);
        checkboxArr = [];
        finalAnswer = null;
        answerID = null;

        if( Number(e.target.parentNode.parentNode.id.split('-')[1]) >= this.props.data.length){
            finalFoo(arrayOfAnswers, this.props.data, this.props.final)
        }

        this.props.click();
    }

    render(){
        return (
            <div className="quation" id={this.props.id}>
                <div className="quation__disc">На данный вопрос может быть только один правильный ответ</div>
                <div className="quation__text"><h3>{this.props.card.quation}</h3></div>
                <Answers card={this.props.card} changeHandler = {this.changeHandler}/>
                <div className="quation__button" onClick={this.clickHandler}><button>Ответить</button></div>
            </div>
        )
    }
}