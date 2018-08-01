import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import JobCard from '.';

storiesOf('Job Card', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('with props', () => (
    <JobCard
      image="https://placekitten.com/150/150"
      title="Developer"
      company="Rithm"
      salary={100000}
      equity={0.5}
    />
  ));
