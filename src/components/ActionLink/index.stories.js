import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, text } from '@storybook/addon-knobs';
import ActionLink from './ActionLink';

import './../../scss/stories.scss';

const stories = storiesOf('Common Use Components', module).addDecorator(withKnobs);

stories.add('Action Link', () => (
    <div className="storybook">
        <div className="storybook__demo">
            <ActionLink 
                label={text('Label', 'Go to the Guide') } 
                iconColor={color('Icon Color', '#0696d7')}
            />
        </div>
    </div>
));

