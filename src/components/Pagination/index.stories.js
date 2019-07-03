import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';

import RichText from '@hig/rich-text';
// import '@hig/rich-text/build/index.css';

import Pagination from './Pagination';
import './../../scss/stories.scss';
const cardData = require("./../../data/SampleData.json");


const stories = storiesOf('Common Use Components', module).addDecorator(withKnobs);

stories.add('Pagination', () => (
    <div className="storybook">
        <div className="storybook__demo">
            <DisplayPagination  
                totalRecords={number('Total Records', 20)}
                pageLimit={number('Page Limit', 2)}
                pageNeighbours={number('Page Neighbours', 0)}
                onPageChangedInnerFunction={text('Alert Under Function', '')}
            />
        </div>
        <div className="storybook__info">
            <RichText>
                <h1>Pagination</h1>
                <p>All you need to do is wrap it in a  component.</p>
                <h2>Basic Usage</h2>
                <pre>
                    <code className="lang-jsx">&lt;Pagination<br />
                    &nbsp;&nbsp;&nbsp;totalRecords=20<br />
                    &nbsp;&nbsp;&nbsp;pageLimit=2<br />
                    &nbsp;&nbsp;&nbsp;pageNeighbours=0<br />
                    &nbsp;&nbsp;&nbsp;onPageChanged="function() return alert('Page Change Triggered!')"<br />
                    /&gt;
                    </code>
                </pre>
                <h2>Prop Types</h2>
                <br />
                <h3>"Pagination" Component</h3>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>propType</th>
                            <th>property</th>
                            <th>required</th>
                            <th>default</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tbody-d1">totalRecords</td>
                            <td className="tbody-d1"><span>number</span></td>
                            <td className="tbody-d2">yes</td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">Indicates the total number of records to be paginated.</td>
                        </tr>
                        <tr>
                            <td className="tbody-d1">pageLimit</td>
                            <td className="tbody-d1"><span>number</span></td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">30</td>
                            <td className="tbody-d2">Indicates the number of records to be shown per page.</td>
                        </tr>
                        <tr>
                            <td className="tbody-d1">pageNeighbours</td>
                            <td className="tbody-d1"><span>number</span></td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">0</td>
                            <td className="tbody-d2">Indicates the number of additional page numbers to show on each side of the current page. The minimum value is 0 and the maximum value is 2.</td>
                        </tr>
                        <tr>
                            <td className="tbody-d1">onPageChanged</td>
                            <td className="tbody-d1"><span>function</span></td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">Passes function will be executed when page changes</td>
                        </tr>
                    </tbody>
                </table> 
            </RichText>
        </div>
    </div>
));
    

class DisplayPagination extends Component{

    constructor(props){
        super(props);

        //initial state
        this.state = {
            allItems: [],
            currentItems: [],
            currentPage: null,
            totalPages: null
        }
    }

    componentDidMount(){
        const allItems = cardData.entries.item;
        this.setState({ allItems });
    }
    onPageChanged = data => {
        // const { allItems } = this.state;
        // const { currentPage, totalPages, pageLimit } = data;
    
        // const offset = (currentPage - 1) * pageLimit;
        // const currentItems = allItems.slice(offset, offset + pageLimit);
    
        // this.setState({ currentPage, currentItems, totalPages });

        var alertme = this.props.onPageChangedInnerFunction ? this.props.onPageChangedInnerFunction : '';
        if(alertme){
            alert(alertme);
        }
    };

    render(){
        const {
            allItems,
            currentItems,
            currentPage,
            totalPages
          } = this.state;
        
        const totalItems = allItems.length;
        
        if(totalItems === 0) return null;

        return(
            <div className="displayContainer">
                {/* {
                    currentItems.map(item => (
                        <List key={item.id} item={item}></List>
                    ))
                } */}
                <Pagination
                    totalRecords={this.props.totalRecords}
                    pageLimit={this.props.pageLimit}
                    onPageChanged={this.onPageChanged}
                    pageNeighbours={this.props.pageNeighbours}
                />
            </div>
        )
    }
}

DisplayPagination.defaultProps = {
    totalRecords:15,
    pageLimit:2,
    pageNeighbours:0
}
