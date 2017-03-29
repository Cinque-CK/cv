import React,{Component,PropTypes} from 'react';
import '../../css/com/hexagon.css';

export default class HexagonCOMP extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="hexagon">
                <div className="hexagon_inner1">
                    <div className="hexagon_inner2">
                        <div className="hexagon_inner3"></div>
                    </div>
                </div>
            </div>
        )
    }
}