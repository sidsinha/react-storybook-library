import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import List from './List';
import './../../scss/stories.scss';

const cardData = require("./../../data/SampleData.json");


const stories = storiesOf('Common Use Components', module).addDecorator(withKnobs);

// Knobs for React props
stories.add('List Display', () => (
    <DisplayList />
));


class DisplayList extends Component{

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
        console.log(this.state);
        return(
            <div className="displayContainer">
                {this.state.items.map((item, index) => (
                    <List 
                        key={index} 
                        item={item} 
                        view='collection'
                    ></List>
                ))}
            </div>
        )
    }
}