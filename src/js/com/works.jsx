import React,{Component,PropTypes} from 'react';
import '../../css/com/works.css';

export default class WorksCOMP extends Component{
    constructor(props){
        super(props);
    }

    static defaultProps = {
        prodName:'',
        mainImgUrl: '',
        prodContent: ''
    };

    static propTypes = {
        prodName: PropTypes.string,
        mainImgUrl: PropTypes.string,
        prodContent: PropTypes.string
    };

    render(){
        const {prodName,mainImgUrl,prodContent} = this.props;
        return(
            <div className="works">
                <span>{prodName}</span>
                <img src={mainImgUrl} alt={prodName}/>
                <div>{prodContent}</div>
            </div>
        )
    }
}