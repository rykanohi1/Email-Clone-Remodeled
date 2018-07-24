import React, {Component} from 'react';
import ActionButton from '../action-button/action-button';


export default class DropDown extends Component {

  constructor(props) {
    super(props);
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.state = {
      isHidden: true
    };
    // items need to be objects
    this.props.items.forEach(item => {
      if (typeof item !== 'object' || !('id' in item) && !('value' in item)) {
        throw new Error('invalid object')
      }
    });
    // items need to be contained within arrays
    if (!Array.isArray(this.props.items)) {
      throw new Error('must be an array')
    }
  }

  /**
   * toggles the display
   */
  toggleDisplay(){
    this.setState(state => ({
      isHidden: !state.isHidden
    }));
  };
  render() {
    debugger;
    return (
      <div className='drop-down'>
        <ActionButton imgSrc={this.props.imgSrc} action={this.toggleDisplay} label={this.props.label} title='expand-options' />
        <ul className={`dropdown ${this.state.isHidden ? 'hide' : 'show'}`}>
          {this.props.items.map(item => <li key={item.id}>
          <ActionButton title={item.value.title}
                        label={item.value.label}
                        imgSrc={item.value.imgSrc}
                        action={item.value.action} />
          </li>)}
        </ul>
      </div>
    );
  }
}