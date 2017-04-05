import React,{Component,PropTypes} from 'react';
import '../../css/com/experience.css';

export default class ExperienceCOMP extends Component{
    constructor(props){
        super(props);
    }

    static defaultProps = {
        timeRange: '',
        logoUrl: '',
        compName: '',
        position: '',
        prodContent: ''
    };

    static propTypes = {
        timeRange: PropTypes.string,
        logoUrl: PropTypes.string,
        compName: PropTypes.string,
        position: PropTypes.string,
        prodContent: PropTypes.string
    };

    render(){
        const {timeRange,logoUrl,compName,position,prodContent} = this.props;
        return(
            <div className="experience">
                <div className="timeRange">{timeRange}</div>
                <div className="content-right">
                    <div className="compInfo">
                        <img src={logoUrl} alt={compName}/>
                        <span>{compName}</span>
                        <div>{position}</div>
                    </div>
                    <div>{prodContent}</div>
                </div>
            </div>
        )
    }
}