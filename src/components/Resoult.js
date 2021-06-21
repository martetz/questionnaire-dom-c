import {Component} from 'react';
import Err from '../err.svg';
import Right from '../right.svg';

let img;

export default class Resoult extends Component{
    constructor(props){
        super(props);
        this.renderIconImg = this.renderIconImg.bind(this);
    }

    renderRemarkForQuations(){
        return this.props.apiData[this.props.card.id-1].remark;
    }

    renderIconImg(res){
        return res ? img = Right : img = Err;
    }

    render(){     
        return (
            <div className='resoult'>
                <div className='resoult__number'>{this.props.card.id + '.'}</div>
                <div className='resoult__icon' style={{backgroundImage: `url(${this.renderIconImg(this.props.card.res)})`}}>
                    
                </div>
                <div className='resoult__correct'>{this.renderRemarkForQuations()}</div>
            </div>
        )
    }
}