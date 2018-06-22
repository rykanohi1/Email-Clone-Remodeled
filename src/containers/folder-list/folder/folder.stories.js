import React from 'react';
import Folder from './folder';
import {storiesOf} from '@storybook/react';

storiesOf('Folder', module)
    .add('default', () => <Folder label='default' hasUnread={false} isSelected={false} count='0'/>)