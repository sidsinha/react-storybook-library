import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import log from 'loglevel';

/* HIG Import */
import IconButton from '@hig/icon-button';
import '@hig/icon-button/build/index.css';
/* Styles */
import './ToggleIcon.scss';
/* Utils */
import * as utils from './../../utils/handleAnalytics';

const displayToggle = props => {

    /* useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined */
    useEffect(() => {
        handleClick(props.icon1);
    }, []);
    
    const handleClick = icon => {
        
        const targetElem = document.querySelector(`[title="${icon}"]`);
        const getActiveDisplay = document.querySelectorAll('.activeDisplay');
        getActiveDisplay.forEach(function(key){
            if(targetElem !== key){
            key.classList.remove('activeDisplay');
        }
        });

        targetElem.classList.add('activeDisplay');

        props.clickEvt(icon);

        //Tracking Analytics
        utils.handleAnalytics('displayToggle', props.icon1);
    }
    return(
        <span className="display-toggle">
            <IconButton
                title={props.icon1}
                name={props.icon1}
                onClick={() => handleClick(props.icon1)}
            />
            <IconButton
                title={props.icon2}
                name={props.icon2}
                onClick={() => handleClick(props.icon2)}
            />
        </span>
    )
}

export default React.memo(displayToggle);

/*  Declare Prop Types */
displayToggle.propTypes = {
    icon1: PropTypes.string,
    icon2: PropTypes.string,
    clickEvt: PropTypes.func,
}

/*  Default Props */
displayToggle.defaultProps = {
    clickEvt: () => void(0),
    icon1: "list",
    icon2: "grid"
};