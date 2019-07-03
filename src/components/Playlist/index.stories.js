import React, { Component } from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withKnobs, color, text, boolean } from '@storybook/addon-knobs';

import Playlist from './index';
import './../../scss/stories.scss';
const cardData = require("./../../data/SampleData.json");

const stories = storiesOf('AKN Components', module).addDecorator(withKnobs);


// Knobs for React props
stories.add('Playlist Display', () => (
    <DisplayPlaylist
        heading={text('Heading', 'Contributed Links with other mixed contents - Simple content Articles, Screencast')}
        authorName={text('Author Name', 'Autodesk')}
        authorAvatar={text('Author Avatar', '')}
    />
));


//ceated component to display pagination
class DisplayPlaylist extends Component {
    constructor(props){
        super(props);

        //initial state
        this.state = {
            items: [],
            intializeComponent: false
        }
    }

    componentDidMount(){
        const items = cardData.entries.item;
        this.setState(
            { items },
            () => {this.validateData()}
        );
    }
    validateData() {
        console.log('validateData', this.state.items);
        this.setState({
            intializeComponent: true
        })
    }
    render(){
        let playList = null;
        if(this.state.intializeComponent){
            playList = <Playlist 
                                items={this.state.items}
                                currentId={5}
                                heading= {this.props.heading}
                                pageUrl="https://knowledge-staging.autodesk.com/community/collection/collectiontwo"
                                siteEnv= "int"
                                pageLimit= {5}
                                totalItems= {6}
                                displayIndex={true}
                                authorName={this.props.authorName}
                                authorAvatar={this.props.authorAvatar}
                                authorUrl="https://knowledge-staging.autodesk.com/profile/HKFN2WXWUZRC8"
                            />;
        }
        return(
            <div className="displayContainer">
                { playList }
            </div>
        )
    }
}