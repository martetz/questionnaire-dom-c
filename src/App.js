import {Component} from 'react';
import Card from './components/Card';
import Final from './components/Final';
import finalFoo from './components/finalFoo';

const url = 'http://localhost:3001/api/quations';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: false,
            finalData: null,
            counter: 0,
            display: 'none',
        }

        this.clickHandler = this.clickHandler.bind(this);    
        this.finalScreenFunc = this.finalScreenFunc.bind(this);
    }

    async componentDidMount(){
        const res = await fetch(url);
        const data = await res.json();
        this.setState({
            data,
        })    
    }


    finalScreenFunc(results){
        this.setState({
            finalData: results
        })

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
       const cardsList = q.map(card => (<Card key={'key-' + card.id} 
       card={card} nextQuation={this.clickHandler} final={this.finalScreenFunc} data={q} />))

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
                <div className='container'>
                    <h1>Что вы знаете о ДомКлик?</h1>
                    {this.initAllQuations(q)}
                    <Final display={this.state.display} data={this.state.finalData}/>
                </div>
            )
        }
    }
}