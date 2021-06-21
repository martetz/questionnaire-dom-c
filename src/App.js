import {Component} from 'react';
import Card from './components/Card';

const url = 'http://localhost:3001/api/quations';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: false
        }
        this.clickHandler = this.clickHandler.bind(this);    
        this.finalScreenHandler = this.finalScreenHandler.bind(this);
    }
    async componentDidMount(){
        const res = await fetch(url);
        const data = await res.json();
        this.setState({
            data,
            counter: 0,
            display: 'none'
        })    
    }


    finalScreenHandler(){
        this.setState({
            display: 'block'
        })
    }


    clickHandler(){
        this.setState({
            counter: this.state.counter + 1,
        })
        
    }

    initAllQuations(q){
       const cardsList = q.map(card => (<Card key={'key-'+ card.id} 
       id = {'card-'+ card.id} card={card} data={q} click={this.clickHandler} final={this.finalScreenHandler}/>))

           return (
            <>
                {cardsList[this.state.counter]}
            </>
        )
    }

    render(){
        if(!this.state.data){
            return (<div className='container'><h1>Что вы знаете о ДомКлик?</h1></div>)
        } else {
            let q = this.state.data;
            return (
                <>
                <div className='container'>
                    <h1>Что вы знаете о ДомКлик?</h1>
                    {this.initAllQuations(q)}
                </div>

                <div className='final' style={{display: this.state.display}}><
                    h1>Финальные рузультаты!</h1>                
                </div>
                </>
            )
        }
     
    }
}