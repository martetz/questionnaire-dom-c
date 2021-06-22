import {Component} from 'react';
import Card from './components/Card';
import Final from './components/Final';
import Loader from './components/Loader';

const url = 'http://localhost:3001/api/quations';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: false,
            finalData: null,
            counter: 0,
            display: 'flex',
            warning: Loader(),
            warningContainer: 'none',
        }

        this.clickHandler = this.clickHandler.bind(this);    
        this.finalScreenFunc = this.finalScreenFunc.bind(this);
    }

    async componentDidMount(){
        let res = await fetch(url)
                    .then((res => res.json()))
                        .then((data) => {return data})
                    .catch((err) => {return 'Ошибка: ' + err});
        

        if(typeof res !== 'string'){
            let data = await res;
            this.setState({
                data,
            })
        } else {
            this.setState({
                warning: res,
                warningContainer: 'rgba(255, 255, 255, 0.6)'
            })
        }     
    }

    finalScreenFunc(results){
        this.setState({
            finalData: results
        })

        this.setState({
            display: 'flex'
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
            return (
                <div className='container'>
                    <h1>Что вы знаете о ДомКлик?</h1>
                    <div style={{background: this.state.warningContainer, boxShadow: this.state.warningContainer}} className='warning'>{this.state.warning}</div>
                </div>
            )
        } else {
            if(!this.state.finalData){
                let q = this.state.data;
                return (
                    <div className='container'>
                        <h1>Что вы знаете о ДомКлик?</h1>
                        {this.initAllQuations(q)}
                    </div>
                )
            } else {
                return (
                    <div className='container'>
                        <Final display={this.state.display} 
                            finalData={this.state.finalData} apiData={this.state.data}/>
                    </div>
                )
            }         
        }
    }
}