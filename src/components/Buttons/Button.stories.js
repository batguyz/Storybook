import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonLight from './Button'
 
storiesOf('Button', module)
  .add('default', () => (
    <ButtonLight />
  ));