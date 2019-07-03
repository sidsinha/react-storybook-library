import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/*  Custom Components */
import Share from './../components/Share';
import Report from './../components/Report';
import { ShareIcon, FlagIcon } from './../components/Icons/SVGIcons';
/* Styles */
import * as Styles from './../components/Styled/styles';

const handleShareReportTabbing = props => {

    const { items } = props;

    let shareTab, reportTab = '';
    const share = items.includes('share');
    const report = items.includes('report');

    if(share){
        shareTab = 
            <Fragment>
                <p className="heading share-collection" data-index="tab1">
                    <ShareIcon />
                    Share
                </p>
                <div className="content" id="tab1">
                    <Share />
                </div>
            </Fragment>;
    }
    if(report){
        reportTab = 
            <Fragment>
                <p className="heading report" data-index="tab2">
                    <FlagIcon/>
                    Report
                </p>
                <div className="content" id="tab2">
                    <Report />
                </div>
            </Fragment>;
    }


    const handleTabbing = (e) => {
        var getAllHeading = document.querySelectorAll('.heading');
        getAllHeading.forEach(function(key){
            if(e.target !== key){
                key.classList.remove('activeLink');
            }
        });
        var getAllContents = document.querySelectorAll('.content');
        getAllContents.forEach(function(key){
            if(e.target.nextElementSibling !== key){
                key.classList.remove('active');
            }
        });
        e.target.classList.toggle('activeLink');
        if(e.target.nextElementSibling !==  null){
            e.target.nextElementSibling.classList.toggle('active');
        }
    }

    return(
        <Styles.StyledShareReportTab onClick={handleTabbing}>
            { shareTab }
            { reportTab }
        </Styles.StyledShareReportTab>
    )
}

export default handleShareReportTabbing;

/*  Declare Prop Types */
handleShareReportTabbing.propTypes = {
    items: PropTypes.array
}