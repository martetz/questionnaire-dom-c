import {Component} from 'react';
import RadioBoolean from './RadioBoolean';
import Shuffle from './Shuffle';
import Radio from './Radio';

export default class Answers extends Component{

  initAnswers(card){
    if(card.difficulty === 'easy' && card.type === 'boolean'){
      return (
        <>
        <RadioBoolean id = {'radio-'+ card.id + 'a'} value = {true} answerText='Да'/> 
        <RadioBoolean id = {'radio-'+ card.id + 'b'} value = {false} answerText='Нет'/>
        </>
      )
    } 

    if(card.difficulty === 'middle'){
      let answers = [];
      card.incorrect.forEach(val => {
        answers.push(val);
      })
      answers.push(card.correct);
      let result = Shuffle(answers);
      console.log('key-' + Math.floor(Math.random()*100000));
      let allAnswers = result.map(res => (<Radio key={'key-' + Math.floor(Math.random()*100000)} answerText = {res} id = {'radio-' + Math.floor(Math.random()*100000)}/>))
      return (
        <>
        {allAnswers}
        </>
      )
    }

    if(card.difficulty === 'hard'){
      console.log('Это сложный вопрос');
    }

  }

    render(){
        return (
            <form className="quation__answers">
              {this.initAnswers(this.props.card)}
            </form>
        )
    }
}



