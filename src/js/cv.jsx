import React, {Component, PropTypes} from 'react';
import ReactTouchEvents from "react-touch-events";
import I18n from './i18n.js';
import HexgonCOMP from './com/hexagon.jsx';
import AboutMeCOMP from './com/aboutMe.jsx';
import SkillsCOMP from './com/skills.jsx';
import ExperienceCOMP from './com/experience.jsx';
import WorksCOMP from './com/works.jsx';
import ContactMeCOMP from './com/contactMe.jsx';


import '../css/common.css';
import '../css/cv.css';

export default class Cv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'enUS',
            activeContent: -1 //-1-close 0-aboutMe 1-skills 2-experience 3-works 4-contactMe
        };

        this.handleClickAboutMe = this.handleClickAboutMe.bind(this);
        this.handleClickSkills = this.handleClickSkills.bind(this);
        this.handleClickExperience = this.handleClickExperience.bind(this);
        this.handleClickWorks = this.handleClickWorks.bind(this);
        this.handleClickContactMe = this.handleClickContactMe.bind(this);

        this.handleClickHexagon = this.handleClickHexagon.bind(this);

        this.switchLang = this.switchLang.bind(this);

        this.activating = false; //Is the animation running
    }

    handleClickAboutMe(e) {
        e.preventDefault();
        this.handleClickHexagon(0);
    }

    handleClickSkills(e) {
        e.preventDefault();
        this.handleClickHexagon(1);
    }

    handleClickExperience(e) {
        e.preventDefault();
        this.handleClickHexagon(2);
    }

    handleClickWorks(e){
        e.preventDefault();
        this.handleClickHexagon(3);
    }

    handleClickContactMe(e){
        e.preventDefault();
        this.handleClickHexagon(4);
    }

    /**
     * fire when click hexagon
     * @param hexIndex
     */
    handleClickHexagon(hexIndex){
        let self = this;
        if(self.activating){
            return;
        }
        if(self.state.activeContent === hexIndex && !self.activating){
            self.setState({activeContent:-1});
            self.activating = true;
            setTimeout(()=>{self.activating = false},1000);
        } else {
            self.setState({activeContent:hexIndex});
            self.activating = true;
            setTimeout(()=>{self.activating = false},1000);
        }
    }

    switchLang(){
        if(this.state.lang === 'zhCN'){
            this.setState({lang:'enUS'});
        } else {
            this.setState({lang:'zhCN'});
        }
    }

    render() {
        const lang = this.state.lang;
        const hex_avatar = {
                classPrefix: 'avatar'
            },
            hex_aboutMe = {
                classPrefix: 'aboutMe',
                iconName:'aboutMe',
                tipText: I18n[lang].aboutMe,
                handleClickFunc: this.handleClickAboutMe
            },
            hex_ability = {
                classPrefix: 'skills',
                iconName:'skills',
                tipText:I18n[lang].skills,
                handleClickFunc: this.handleClickSkills
            },
            hex_experience = {
                classPrefix: 'experience',
                iconName:'experience',
                tipText:I18n[lang].experience,
                handleClickFunc: this.handleClickExperience
            },
            hex_works = {
                classPrefix: 'works',
                iconName:'works',
                tipText: I18n[lang].works,
                handleClickFunc: this.handleClickWorks
            },
            hex_contactMe = {
                classPrefix: 'contactMe',
                iconName:'contactMe',
                tipText: I18n[lang].contactMe,
                handleClickFunc: this.handleClickContactMe
            };

        var contentDiv = (()=>{
            switch (this.state.activeContent){
                case 0:
                    return <AboutMeCOMP/>;
                case 1:
                    return <SkillsCOMP/>;
                case 2:
                    return <ExperienceCOMP/>;
                case 3:
                    return <WorksCOMP/>;
                case 4:
                    return <ContactMeCOMP/>;
                default:
                    return (<div></div>);
            }
        })();

        return (
            <div className="frame-cv">
                    <div className="switch">
                        <span onClick={this.switchLang}>中</span>
                        <span onClick={this.switchLang}>En</span>
                    </div>
                    <div className="container">
                        <div className="container-top">
                            <HexgonCOMP {...hex_aboutMe}/>
                            <HexgonCOMP {...hex_avatar}/>
                            <HexgonCOMP {...hex_ability}/>
                        </div>
                        <div className={this.state.activeContent === -1?"content":"content active"}>
                            {contentDiv}
                        </div>
                        <div className="container-bottom">
                            <HexgonCOMP {...hex_experience}/>
                            <HexgonCOMP {...hex_contactMe}/>
                            <HexgonCOMP {...hex_works}/>
                        </div>
                    </div>
            </div>
        )
    }
}
