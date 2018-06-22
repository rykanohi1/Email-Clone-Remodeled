import React from 'react';
import './search-bar.scss';
import { storiesOf } from '@storybook/react';
import SearchBar from './search-bar';
import storeData from '../../store/store';
import {Provider} from 'react-redux';


storiesOf('SearchBar', module)
  .add('default', () => <Provider store={storeData}><SearchBar contacts={storeData.contacts} imgSrc='http://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/256/search-icon.png'/></Provider>);