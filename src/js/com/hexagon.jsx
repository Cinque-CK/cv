import React,{Component,PropTypes} from 'react';
import ReactTouchEvents from "react-touch-events";
import '../../css/com/hexagon.css';

export default class HexagonCOMP extends Component{
    constructor(props){
        super(props);
    }

    static defaultProps = {
        classPrefix:'',
        iconName:'',
        tipText:'',
        handleClickFunc:()=>{}
    };

    static propTypes = {
        classPrefix: PropTypes.string,
        iconName: PropTypes.string,
        tipText: PropTypes.string,
        handleClickFunc: PropTypes.func
    };

    render(){
        const {classPrefix,iconName,tipText,handleClickFunc} = this.props;
        return(
            <div className={`hexagon ${classPrefix}`}>
                <div className="hexagon_inner1">
                    <div className="hexagon_inner2">
                        <ReactTouchEvents onTap={handleClickFunc}>
                            <div className="hexagon_inner3" onClick={handleClickFunc} >
                                <div className={"hexagon_icon"}>
                                    <span className={`icon-${iconName}`}></span>
                                </div>
                                <div className="hexagon_text">{tipText}</div>
                            </div>
                        </ReactTouchEvents>
                    </div>
                </div>
            </div>
        )
    }
}