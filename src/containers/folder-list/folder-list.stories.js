import React from 'react';

import { storiesOf } from '@storybook/react';

import FolderList from './folder-list';

const folders = [{label: 'test1', hasUnread: true, count: 1, isSelected: true, id: 1},
  {label: 'test2', hasUnread: false, count: 2, isSelected: false, id: 2},
  {label: 'test3', hasUnread: false, count: 3, isSelected: false, id: 3}];

storiesOf('FolderList', module)
  .add('default', () => <FolderList folders={folders}/>);