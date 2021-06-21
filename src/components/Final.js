import {Component} from 'react';


export default class Final extends Component{
    render(){
        return(
            <div className='final' style={{display: this.props.display}}>
                <h1>Финальные рузультаты!</h1>                
            </div>
        )
    }
}