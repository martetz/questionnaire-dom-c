import RadioBoolean from './RadioBoolean';
import Shuffle from './Shuffle';
import Radio from './Radio';
import Checkbox from './Checkbox';

export default function toFormAnswers (card, changeHandler) {
  if(card.difficulty === 'easy' && card.type === 'boolean'){
    return (
      <>
        <RadioBoolean id = {'radio-'+ card.id + 'a'} value = {true} answerText='Да' changeHandler={changeHandler}/> 
        <RadioBoolean id = {'radio-'+ card.id + 'b'} value = {false} answerText='Нет' changeHandler={changeHandler}/>
      </>
    )
  } 
    
  if(card.difficulty === 'middle'){
    let answers = [];
    card.incorrect.forEach(val => {
      answers.push(val);
      })
    answers.push(card.correct);
    let resoult = Shuffle(answers);
    let allAnswers = resoult.map(res => (<Radio key={'key-middle-' + Math.floor(Math.random()*100000)} answerText = {res} 
    id = {'radio-' + Math.floor(Math.random()*100000)} changeHandler={changeHandler}/>))
    return (
      <>
        {allAnswers}
      </>
    )
  }

    
  if(card.difficulty === 'hard'){
    let answers = [];
    if(card.incorrect !== []){
      card.incorrect.forEach(val => {
        answers.push(val)
      })
    }            
    
    if(card.correct !== []){
      card.correct.forEach(val => {
        answers.push(val)
      })
    }

    let resoult = Shuffle(answers);
    let allAnswers = resoult.map(res => (<Checkbox key={'key-hard-' + Math.floor(Math.random()*100000)} 
    id={'checkbox-' + Math.floor(Math.random()*100000)} answerText = {res} changeHandler={changeHandler}/>));
    return (
      <>
        {allAnswers}
      </>
    )
  }
}