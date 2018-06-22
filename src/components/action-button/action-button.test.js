import React from 'react';
import {shallow} from 'enzyme';
import ActionButton from './action-button';

const noop = () => {
};

describe('ActionButton', () => {
  test('should display an icon when provided with an image', () => {
    const expected = 1;
    const image = 'src';
    const app = shallow(<ActionButton imgSrc={image} action={noop}/>);
    const actual = app.find('img').length;
    expect(actual).toEqual(expected);
  });

  test('root element of component should be a button', () => {
    const expected = 'button';
    const app = shallow(<ActionButton imgSrc={'test'} action={noop}/>);
    const actual = app.node.type;
    expect(actual).toEqual(expected);
  });

  test('should display a label when given text', () => {
    const expected = 1;
    const text = 'a';
    const app = shallow(<ActionButton label={text} action={noop}/>);
    const actual = app.find('span').length;
    expect(actual).toEqual(expected);
  });

  test('should not display an icon if not provided with an image', () => {
    const expected = 0;
    const app = shallow(<ActionButton label={'test'} action={noop}/>);
    const actual = app.find('img').length;
    expect(actual).toEqual(expected);
  });

  test('should not display a label if given no text', () => {
    const expected = 0;
    const app = shallow(<ActionButton imgSrc={'test'} action={noop}/>);
    const actual = app.find('span').length;
    expect(actual).toEqual(expected);
  });

  test('should have a title if given a title', () => {
    const expected = 'test';
    const app = shallow(<ActionButton title={expected} imgSrc={'mock'} action={noop}/>);
    const actual = app.props().title;
    expect(actual).toEqual(expected);
  });

  test('should indicate contract violation if no action is provided', () => {
    expect(() => shallow(<ActionButton label={'test'}/>))
      .toThrow();
  });

  test('should indicate contract violation if no imgSrc or label is provided', () => {
    expect(() => shallow(<ActionButton action={noop}/>)).toThrow();
  });

  test('run an action when given an action', () => {
    const testFn = jest.fn();
    const expected = 1;
    const app = shallow(<ActionButton action={testFn} label={'test'}/>);
    app.simulate('click');
    const actual = testFn.mock.calls.length;
    expect(actual).toEqual(expected);
  });
});