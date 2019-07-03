import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EnvUrlChange from '../../HOC/EnvUrlChange';

import './PrevNextLinks.scss';
import * as Styles from '../Styled/styles';

class PrevNextLinks extends Component {

    // Function called when next/prev item clicked
    onItemClick(destinationUrl){
        //reloading the page with new cass content url
        top.location = destinationUrl;
    }
    
    componentDidMount(){
        ReactDOM.findDOMNode(this).addEventListener('click', this.handleAnalyticsClick);
    }

    handleAnalyticsClick(evt){
        let target = evt.target;
        let targetElem = target.className;
        
        if( (targetElem == 'left') || (targetElem == 'right') ){

            let dataLayerObject = {};
            dataLayerObject['event'] = 'link';
            dataLayerObject['linkValue'] = `Collection Navigation_${evt.target.innerText}`;

            if(typeof GA_AKP != 'undefined') {
                GA_AKP.dataLayerSend(dataLayerObject);
            }  
        }

    }

    render(){
        let prevItem =  <div className="prevItem no-cursor">
                            <span className="lt">&nbsp;</span>
                        </div>;
        let nextItem =  <div className="nextItem no-cursor">
                            <span className="gt">&nbsp;</span>
                        </div>;
        
        let currentIndex = parseInt(this.props.currentId - 1);

        let prevIndex = currentIndex - 1;
        if(this.props.items[prevIndex] !== undefined){
            prevItem = <div className="prevItem" onClick={(evt) => this.onItemClick(this.props.items[prevIndex].contentUrl)}>
                            <span className="lt">&lt; </span>
                            <span className="left">Previous: {this.props.items[prevIndex].title}</span>
                        </div>;
        }

        let nextIndex = parseInt(currentIndex + 1);
        if(this.props.items[nextIndex] !== undefined){
            nextItem = <div className="nextItem" onClick={(evt) => this.onItemClick(this.props.items[nextIndex].contentUrl)}>
                            <span className="right">Next:  {this.props.items[nextIndex].title}</span>
                            <span className="gt">&gt;</span>
                        </div>;
        }
        

        return (
            <Styles.StyledWrapper>
                <div className="prevnextlinks">
                    {prevItem}
                    {nextItem}
                </div>
            </Styles.StyledWrapper>
        )
    }
}

PrevNextLinks.defaultProps = {
    currentId: 2,
    items: [],
    siteEnv:'whdev'
}
export default EnvUrlChange(PrevNextLinks);