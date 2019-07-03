import React, { Fragment, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
/*  Custom Components */
import Flyout from './../Flyout';
import Share from './../Share';
import { AddIcon, ShareIcon, CtaArrowRight } from '../Icons/SVGIcons';
import ActionLink from './../ActionLink';
/* HOCs */
import EnvUrlChange from '../../HOC/EnvUrlChange';
/* Styles */
import * as vars from './../Styled/variables';
import * as Styles from './../Styled/styles';
import { StyleQuickStartGuide } from './../Styled/QuickStartGuide';

const quickStartGuide = props => {
  const { 
    totalItems,
    description,
    pageUrl 
  } = props;

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
          <div className="action_link">
            <ActionLink label="Go to the Guide" analyticsEvent="quickstartGuideBanner" url={pageUrl} />
          </div>
        </div>
      </Fragment>
  )
}

export default EnvUrlChange(quickStartGuide);

/*  Declare Prop Types */
quickStartGuide.propTypes = {
  totalItems: '',
  description: ''
}