import React, {Component} from 'react';
import ActionButton from 'components/action-button/action-button.js';

export default class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }

    toggleMenu() {
        this.setState(state => ({
            isHidden: !state.isHidden
        }));
    }

    hideMenu() {
        this.setState({
            isHidden: true
        });
    }
    
    render() {
        return (
        <React.Fragment>
        <div className={this.state.isHidden ? "" : "toggle-mask"} onClick={this.toggleMenu}/>
        <div className="profile">
            <ActionButton className="toggle-menu" imgSrc={require('images/options.png')} action={this.toggleMenu}/>
            <div className={`menu ${this.state.isHidden ? 'hide' : 'show'}`}>
                <div className="head">
                    <span>Profile</span>
                    <ActionButton className="hide-menu" imgSrc={require('images/Close.png')} action={this.hideMenu}/>
                </div>
            </div>
        </div>
        </React.Fragment>
        )
    }
}