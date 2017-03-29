import React, {Component,PropTypes} from 'react';
import HexgonCOMP from './com/hexagon.jsx';

export default class Cv extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <HexgonCOMP/>
            </div>
        )
    }
}
