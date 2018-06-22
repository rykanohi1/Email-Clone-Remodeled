import React from 'react';
import './drop-down.scss';
import { storiesOf } from '@storybook/react';
import DropDown from './drop-down';

const items = [{id:'slot 1', value:{title:'slot 1',
                                    label:'says hello',
                                    action:() => alert('Hello')}},
               {id:'slot 2', value:{title:'slot 2',
                                    label:'conversation continues',
                                    action:() => alert('How nice to see you!')}},
               {id:'slot 3', value:{title:'slot 3',
                                    label:'says goodbye',
                                    action:() => alert('goodbye!')}}
                                  ];

const items_2 = [{
    id: 'slot 1',
    value: {
      title: 'says hello',
      imgSrc: '.../images/canva-blue-facebook-messenger-social-media-icon-MAB0hzpHfHg.png',
      action: () => alert('Hello')
    }
  },
  {
    id: 'slot 2',
    value: {
      title: 'conversation continues',
      imgSrc:'.../images/ms-icon-310x310.png',
      action: () => alert('How nice to see you!')
    }
  },
  {
    id: 'slot 3',
    value: {
      title: 'says goodbye',
      imgSrc: '.../images/settings 3.ico',
      action: () => alert('goodbye!')
    }
  }
];

storiesOf('DropDown', module)
  .add('with text', () => <DropDown label='text drop-down' items={items}/>)
  .add('with pictures', ()=> <DropDown imgSrc='.../images/index.png' items={items_2}/>)