import React from 'react';
import LeftRightLayout from './left-right-layout';

import { storiesOf } from '@storybook/react';

function testContents() {
  return ['This is the left', 'This is the right'].map((value, idx) => <div key={idx}>{value}</div>);
}

import LayoutRightLeft from './left-right-layout';

storiesOf('LayoutRightLeft', module)
  .add('basic layout', () => <LeftRightLayout
    className="test"
    children={testContents}
  />);
