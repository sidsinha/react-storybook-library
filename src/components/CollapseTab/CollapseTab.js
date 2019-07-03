import React, { Component } from 'react';
import { AddIcon } from './../Icons/SVGIcons';
/* Styles */
import * as Styles from './../Styled/styles';

export default class CollapseTab extends Component {

    constructor(props) {
        super(props);
    }

    static Heading= ({ children }) => <p className="heading">{children}</p>;
    static Content = ({ children }) => <div className="content">{children}</div>;

    handleTabbing = (e) => {
        
        if(e.target.classList.contains('heading')){

            const domContent = e.target.parentNode.children[0];  
            if(domContent !==  null){
                e.target.classList.toggle('activeLink');

                e.target.classList.contains('activeLink') ? 
                    e.target.innerHTML = "HIDE TOPICS" : e.target.innerHTML = "SEE TOPICS"

                domContent.classList.toggle('active');
            }

            if(typeof this.props.toggleOpenFn === 'function') {
                e.target.classList.contains('activeLink') ? this.props.toggleOpenFn() : ''
            }

        }
        
    }

  render() {
    return (
        <Styles.StyledCollapseTab onClick={this.handleTabbing}>
            {this.props.children}
        </Styles.StyledCollapseTab>
    );
  }
}