import React, {Component, PropTypes} from 'react';
import I18n from './i18n.js';
import HexgonCOMP from './com/hexagon.jsx';

export default class Cv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'zhCN'
        };

        this.handleClickAboutMe = this.handleClickAboutMe.bind(this);
        this.handleClickAbility = this.handleClickAbility.bind(this);
        this.handleClickExperience = this.handleClickExperience.bind(this);
        this.handleClickWorks = this.handleClickWorks.bind(this);
        this.handleClickContactMe = this.handleClickContactMe.bind(this);

        this.switchLang = this.switchLang.bind(this);
    }

    handleClickAboutMe() {

    }

    handleClickAbility() {

    }

    handleClickExperience() {

    }

    handleClickWorks(){

    }

    handleClickContactMe(){

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
                classPrefix: 'ability',
                iconName:'ability',
                tipText:I18n[lang].ability,
                handleClickFunc: this.handleClickAbility
            },
            hex_experience = {
                classPrefix: 'experience,',
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


        return (
            <div>
                <div className="head">
                    <div>
                        <span onClick={this.switchLang}>中</span>
                        <span onClick={this.switchLang}>En</span>
                    </div>
                </div>
                <div className="body">
                    <div className="container-top">
                        <HexgonCOMP {...hex_aboutMe}/>
                        <HexgonCOMP {...hex_avatar}/>
                        <HexgonCOMP {...hex_ability}/>
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
