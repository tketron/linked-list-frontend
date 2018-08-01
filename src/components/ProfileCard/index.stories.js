import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import ProfileCard from '.';

storiesOf('ProfileCard', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('with props', () => (
    <ProfileCard
      image="https://placekitten.com/150/150"
      companyname="Rithm"
      name="Test123omp"
    />
  ));
