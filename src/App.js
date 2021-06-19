import {Component} from 'react';
import Card from './components/Card';

const url = 'http://localhost:3001/api/quations';


export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: false
        }
    }
    async componentDidMount(){
        const res = await fetch(url);
        const data = await res.json();
        this.setState({
            data: data,
        })        
    }

    initAllQuations(q){
       const cardsList = q.map(card => (<Card key={'key-'+ card.id} text={card.quation}/>))
           return (
            <>
                {cardsList}
            </>
        )
    }

    render(){
        if(!this.state.data){
            return (<div></div>)
        } else {
            let q = this.state.data;
            return (
                <div className='container'>
                    <h1>Что вы знаете о ДомКлик?</h1>
                    {this.initAllQuations(q)}
                </div>
            )
        }
     
    }
}