import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import ErrorBoundary from './ErrorBoundary';
import README from './README.md';

/**
 * Set up an error component to show what the Error page will look like.
 *
 * @returns { object }  component
 */
export const ErrorElement = () => {
    const err = (1 / 0);
    <div>
      {err}
    </div>
    ;
};

const stories = storiesOf('Error Boundary', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withReadme([README]));

stories.add('default', () => {
  return (
    <div className="storybook">
      <div className="storybook__demo">
        <ErrorBoundary>
            <ErrorElement></ErrorElement>
        </ErrorBoundary>
      </div>
    </div>
  );
});