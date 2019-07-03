import React, { Component } from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import PrevNextLinks from './index';
import './../../scss/stories.scss';
const cardData = require("./../../data/SampleData.json");

const stories = storiesOf('AKN Components', module).addDecorator(withKnobs);


// Knobs for React props
stories.add('PrevNextLinks', () => (
    <DisplayPrevNextLinks />
));


//ceated component to display pagination
class DisplayPrevNextLinks extends Component {
    constructor(props){
        super(props);

        //initial state
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        const items = cardData.entries.item;
        this.setState({ items });
    }

    render(){
        return(
            <div className="displayContainer">
                {
                    <PrevNextLinks 
                        items={this.state.items}
                        currentId={3}
                        siteEnv= "int"
                    />                
                }
            </div>
        )
    }
}