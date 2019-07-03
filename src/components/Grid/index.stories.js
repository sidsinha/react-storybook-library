import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs';

import Grids from './Grids';
import GridsCols from './GridsCols';
import './../../scss/stories.scss';
const cardData = require("./../../data/SampleData.json");

const stories = storiesOf('Common Use Components', module).addDecorator(withKnobs);

// Knobs for React props
stories.add('Grid Display', () => (
    <SelectGrid 
        view={select('Select View', ['default', 'collection', 'quickstartguide'], 'default') } 
    />
));

const SelectGrid = props => {
    const { view } = props;
    const components = {
        'default': Grids,
        'collection': Grids,
        'quickstartguide': GridsCols
    }

    return(
        <Fragment>
            {
                React.createElement(
                    components[view], {
                        view: view,
                        data: cardData || []
                    }
                )
            }
        </Fragment>
    )
}