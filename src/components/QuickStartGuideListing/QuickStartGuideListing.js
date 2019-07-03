import React, { Fragment, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
/* HOCs */
import ScreenBreakpoint from './../../HOC/ScreenBreakpoint';
/*  Custom Components */
import Flyout from '../Flyout';
import Share from '../Share';
import { AddIcon, ShareIcon, CtaArrowRight } from '../Icons/SVGIcons';
import ActionLink from '../ActionLink';
import GridsCols from './../Grid/GridsCols'
/* HOCs */
import EnvUrlChange from '../../HOC/EnvUrlChange';
/* Styles */
import * as vars from '../Styled/variables';
import * as Styles from '../Styled/styles';
import { StyleQuickStartGuide } from '../Styled/QuickStartGuide';

// const cardData = require("./../../data/SampleData.json");

const quickStartGuideListing = props => {
  const { 
    totalItems,
    description,
    items, 
    pageUrl 
  } = props;
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    setCurrentItems(items);
  },[items.length]);

  return(   
      <Fragment>
        <Styles.GlobalStyle />
        <StyleQuickStartGuide />
        <div id={`${vars.prefix}_quickstart_guide`}>
          <Styles.StyledH2>QUICKSTART GUIDE</Styles.StyledH2>
          <section className="action">
            <div>{ totalItems } articles</div>
            <div className="pipe">|</div>
            <div className="caps">
              <Flyout closeAll={true}>
                  <section className="flyout-click">
                      <ShareIcon size="10" color="#666" /> Share
                  </section>
                  <section>
                      <Share shareUrl={pageUrl} />
                  </section>     
              </Flyout>
            </div>
          </section>
          <section className="description">
            { description }
          </section>
          <section>
            <GridsCols 
                view ='quickstartguide'
                data={currentItems || []}
            />
          </section>
        </div>
      </Fragment>
  )
}

export default EnvUrlChange(quickStartGuideListing);

/*  Declare Prop Types */
quickStartGuideListing.propTypes = {
  totalItems: '',
  description: '',
  items : [{
    'id': '',
    'shortDescription':'',
    'title':'',
    'thumbnailURL': '',
    'contentUrl': '',
    'articleTopics': '' // comma seperated strings ?
  }]
}