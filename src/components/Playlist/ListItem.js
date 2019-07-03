import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
const Constants = require('./../../utils/settings');
import * as Styles from '../Styled/styles';


class ListItem extends Component {

    callback(itemID){
        this.props.onClick(itemID, 'titleClick');
    }
    render(){
        var currentClass = "title";
        if(this.props.currentId === this.props.item.id){
            currentClass += " active";
        }

        const externalIcon = !this.props.item.isInternal ? `<span class="externalicon-playlist"><img src="${Constants.externalLinkIcon}" /></span>` : '';
        const sno = this.props.displayIndex ? `${this.props.index+1}.  ` : '';
        return(
            <Styles.StyledMediumText>
                <p data-position={this.props.item.id} id={`item${this.props.item.id}`} className={currentClass} onClick={() => this.callback(this.props.item.id)}>
                    {sno}
                    {this.props.item.title}
                    { ReactHtmlParser(externalIcon) }
                </p>
            </Styles.StyledMediumText>
        )
    }
}

export default ListItem;