import React from 'react';
import {mount} from 'enzyme';
import LeftRightLayout from './left-right-layout';

// create a function to give contents to the layout
function testContents() {
  return [1, 2].map((value, idx) => <div key={idx}>{value}</div>);
}

describe('LeftRightLayout', () => {
    test('has only two immediate children', () => {
        const expected = 2;
        const app = mount(<LeftRightLayout
          className="test"
          children={testContents}
        />);
        const actual = app.find('.test').length;
        expect(actual).toBe(expected);
    });
});

