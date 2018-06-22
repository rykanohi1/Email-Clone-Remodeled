import React from 'react';
import ActionButton from './action-button';
import './action-button.stories.css';

import {storiesOf} from '@storybook/react';

const noop = () => {
};
// Data

// Fluid Interface -> method returns instance of called object
storiesOf('ActionButton', module)
  .add('with text', () => <ActionButton label='label' action={noop}/>)
  .add('with image', () => <ActionButton
    imgSrc='https://material.io/guidelines/static/spec/images/callouts/default.svg'
    action={noop}/>)
  .add('with text, image, and popup', () => <ActionButton
    title='performs an action'
    label='label'
    imgSrc='https://material.io/guidelines/static/spec/images/callouts/default.svg'
    action={noop}/>)
  .add('with action', () => <ActionButton
    title='sends an alert'
    label='Alert'
    imgSrc='https://s14-eu5.ixquick.com/cgi-bin/serveimage?url=https:%2F%2Fimage.flaticon.com%2Ficons%2Fsvg%2F179%2F179386.svg&sp=63e4e68091abd78d25c6023cac937fa2'
    action={() => alert('You just clicked on me')}/>);
