import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import Dotdotdot from 'react-dotdotdot';

/*  Custom Components */
import CollapseTab from './../CollapseTab';
/* Context */
import CollListingContext from './../../context/collListing-context';
/* HOCs */
import DateFormatter from './../../HOC/DateFormatter';
import WithTheme from '../../HOC/WithTheme';
import ScreenBreakpoint from './../../HOC/ScreenBreakpoint';
/* Styles */
import * as vars from './../Styled/variables';
import * as Styles from './../Styled/styles';
import { CollectionGrid } from './../Styled/Grid/CollectionGrid';
import { QuickStartGrid } from './../Styled/Grid/QuickStartGrid';
/* Utils */
import * as utils from './../../utils/handleAnalytics';
import * as globalVars from './../../utils/settings';

const grid = props => {
    const snoStyle = {
        'marginRight': '10px'
    }
    const context = useContext(CollListingContext);
    const {item, column, view} = props;
    const {
        id,
        title, 
        publishDate,
        shortDescription,
        thumbnailURL,
        contentUrl
    } = item;

    const {
        cardData,
        sourceIcon,
        hrefTarget,
        actionMenu
    } = props.aknProps;

    const {
        cardImage,
        showDate,
        showCollapseTab,
        articleTopics
    } = props.customProps;

    let getColumms = column;
    if(getColumms < 1){
        getColumms = 1;
    }else if(getColumms > 12){
        getColumms = 12;
    }
    const getColumnWidth = 100/getColumms;
    const gridStyle = {
        width: `${getColumnWidth}%`
    };
    const showIndex = context.displayIndex ? <span style={snoStyle}>{id}.</span> : null;


    const headingClickhandler = () => {
        let event;
        if(view === globalVars.quickStartGuideView){
            event = 'quickstartGuideArticleCard';
        }else {
            event = 'articleCard';
        }
        utils.handleAnalytics('Heading', {'event': event, 'title': title}); //utils.handleAnalytics(linkType, event, linkValue);

    }

    const handleToggleAnalytics = () => {

        let event;
        if(view === globalVars.quickStartGuideView){
            event = 'quickstartGuideSeeTopicsOpen';
        }else {
            event = 'toggleOpen';
        }
        utils.handleAnalytics('toggleOpen', {'event': event, 'linkValue': 'See Topics', 'articleTitle': title, 'linkURL': contentUrl})

    }
    return(
        <Fragment>
            <Styles.GlobalStyle />
            {
                view === 'quickstartguide' ? <QuickStartGrid /> : <CollectionGrid />
            }
            <div id={`${vars.prefix}_grid`} className="collection-card" style={gridStyle}>
                {cardData}
                <div className="flex-container">

                    <div className="media">
                        {cardImage}
                        {sourceIcon}
                    </div>
                    <div className="content-outer">
                        <div className="description">
                            <div className="content-wrapper">                               
                                <Styles.StyledH3>
                                    {showIndex}
                                    <a href={contentUrl} onClick={headingClickhandler}>
                                        {title}
                                    </a>
                                </Styles.StyledH3>
                                {
                                    showDate ?  <Styles.StyledTimestamp>
                                                    {publishDate}
                                                </Styles.StyledTimestamp> : ''
                                }
                                
                                <Styles.StyledDescription>
                                    <Dotdotdot clamp={3}>
                                        {shortDescription}
                                    </Dotdotdot>
                                </Styles.StyledDescription>
                            </div>
                        </div>
                        {actionMenu}
                    </div>
                    {
                        showCollapseTab ?
                            <CollapseTab toggleOpenFn={handleToggleAnalytics}>
                                <CollapseTab.Content>
                                        <div className="topic_label">Topics in this article</div>
                                        <ul className="topic_list">
                                            {
                                                articleTopics.map((topic, key) => <li key={key}>{topic}</li>)
                                            }
                                        </ul>
                                </CollapseTab.Content>
                                <CollapseTab.Heading>SEE TOPICS</CollapseTab.Heading>
                            </CollapseTab> : ''
                    }
                    
                </div>
            </div>
        </Fragment>
    )
}

export default ScreenBreakpoint(WithTheme(DateFormatter(grid), 'grid'));

/*  Declare Prop Types */
grid.propTypes = {
    item: PropTypes.object.isRequired,
    column: PropTypes.number,
    responsive: PropTypes.bool,
    view: PropTypes.string //i.e., collection etc
}

/*  Set default props */
grid.defaultProps = {
    column: 4,
    responsive: true
};