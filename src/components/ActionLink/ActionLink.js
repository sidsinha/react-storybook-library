import React, { Fragment } from 'react';

/*  Custom Components */
import { CtaArrowRight } from '../Icons/SVGIcons';
/* Styles */
import * as vars from './../Styled/variables';
import * as Styles from './../Styled/styles';
/* Utils */
import * as utils from './../../utils/handleAnalytics';

const ActionLink = props => {
    let { analyticsEvent, label, iconColor, onClickHandler, url } = props;
    label = label || "Sample Text";
    iconColor = iconColor || vars.blue;

    const handleClick = () => {
        //if you want to track analytics on click, you have ot paas analyticsEvent and label
        if(analyticsEvent && label) {
            utils.handleAnalytics('buttonLink', analyticsEvent, label);
        }       
        onClickHandler();
    }
    
    return(
        <Fragment>
            <Styles.StyledActionLink />
                <div className={`${vars.prefix}__actionlink`}>
                    <a href={url} onClick={handleClick}>
                        <div><CtaArrowRight size="16" color={iconColor} /></div> 
                        <div>{ label || "Sample Text" }</div>
                    </a>
                </div>
        </Fragment>
    )
}

ActionLink.defaultProps = {
    onClickHandler: () => void(0),
}
export default ActionLink;