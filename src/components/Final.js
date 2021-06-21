import {Component} from 'react';
import Resoult from './Resoult';
import Points from './Points';



export default class Final extends Component{
    constructor(props){
        super(props);
        this.initAllResoults = this.initAllResoults.bind(this);
    }

    initAllResoults(finalResoults, data){
        let resoultsList = finalResoults.map(res => (
            <Resoult key={'answerkey-' + res.id} card={res} apiData={data}/>
        ))
        return (
            <>
            {resoultsList}
            </>
        )
    }


    render(){
        return(
            <div className="final" style={{display: this.props.display}}>
                <div className="final__discription">
                    <Points finalData = {this.props.finalData} apiData={this.props.apiData}/>
                </div>   

                <div className="final__resoults">
                    {this.initAllResoults(this.props.finalData, this.props.apiData)}
                </div>                         
            </div>
        )
    }
}