import React from 'react';

import { storiesOf } from '@storybook/react';

import FolderCount from './folder-count';

storiesOf('FolderCount', module)
  .add('has unread', () => <FolderCount hasUnread={true} count="2"/>)
  .add('no unread', () => <FolderCount hasUnread={false} count="2"/>);
