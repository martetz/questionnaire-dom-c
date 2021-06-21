import {Component} from 'react';
let sum = 0;

export default class Points extends Component{
    constructor(props){
        super(props);
        this.state = {
            overall : '???'
        }
    }

    componentDidMount(){
        this.setState({
            overall: sum,
        })
    }

    initPoints(finalData, apiData){
        let pointsList = [];
        let points;
        sum = 0;

        for(let i=0; i<apiData.length; i++){
            if(apiData[i].difficulty === 'easy' && finalData[i].res){
                points = 5;
                sum += points;
            } else if(apiData[i].difficulty === 'middle' && finalData[i].res){
                points = 15;
                sum += points;
            } else if(apiData[i].difficulty === 'hard' && finalData[i].res){
                points = 20;
                sum += points;
            } else {
                points = 0;
                sum += points;
            }
            pointsList.push(<div key={'key-'+ finalData[i].id} className='points__item'>
                {finalData[i].id+':'} <span>{points}</span> баллов</div>)
        }

        return(
            <>
            {pointsList}
            </>
        )
    }

    render(){
        return(
            <div className='points'>
                <h3>Ваш результат: <span>{this.state.overall}</span> баллов из <span>100</span></h3>
                {this.initPoints(this.props.finalData, this.props.apiData)}
            </div>
        )
    }
}


