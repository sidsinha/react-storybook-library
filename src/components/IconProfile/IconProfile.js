import React, { Fragment, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Dotdotdot from 'react-dotdotdot';

var Constant = require('../../utils/settings');
/*  Custom Components */
import EnvUrlChange from '../../HOC/EnvUrlChange';
import Image from './../Image';
import { CaretDownIcon, CaretUpIcon } from './../Icons/SVGIcons';
/* Context */
import TanslatedTextContext from './../../context/traslatedText-context';
/* Styles */
import * as Styles from './../Styled/styles';
/* Utils */
import * as utils from './../../utils/handleAnalytics';

const iconProfile = props => {

    const translatedTextContext = useContext(TanslatedTextContext);
    const [showInfo, setShowInfo] = useState(false);
    let { 
        authorAvatar,
        authorName,
        authorUrl,
        avatarBgColor,
        avatarSize,
        className,
        productInfo,
    } = props;

    authorUrl = authorUrl ? authorUrl : "javascript:void(0)"; // if Author url not provided then dont do anything

    const handleProductToggle = (e) => {
        const productInfoSection = e.currentTarget.nextElementSibling;
        productInfoSection.classList.toggle('show');
        setShowInfo(!showInfo);
    }
    const handleAuthorClick = () => {
        //Tracking Analytics
        utils.handleAnalytics('playlistContributor', authorUrl);

        //reloading the page with author url
        top.location = authorUrl;
    }

    return(
        <Fragment>
            <Styles.StyledIconProfile className={className}>
                <a href="javascript:void(0);" onClick={handleAuthorClick}>
                    <Image 
                        type="circle"
                        w={avatarSize ? avatarSize : "32px"}
                        h={avatarSize ? avatarSize : "32px"} 
                        bgColor={avatarBgColor ? avatarBgColor : ""}
                        imagePath={authorAvatar ? authorAvatar : Constant.defaultAuthorIcon}
                    />
                </a>
                <Styles.StyledH4>
                    <a href="javascript:void(0);" onClick={handleAuthorClick}>
                        {authorName}
                    </a>
                </Styles.StyledH4>
            </Styles.StyledIconProfile>
            {
                productInfo ?
                    <Styles.StyledProductInfoToggle>
                    { translatedTextContext.textProductsCovered } 
                    <span className="caret" onClick={handleProductToggle}>
                        {
                            showInfo ? <CaretUpIcon/> : <CaretDownIcon/>
                        }
                    </span>
                    <div className="product-info">
                        { productInfo }
                    </div>
                </Styles.StyledProductInfoToggle> : ''
            }           
        </Fragment>
    )
}

export default EnvUrlChange(iconProfile);

/*  Declare Prop Types */
iconProfile.propTypes = {
    authorName: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string,
    authorUrl: PropTypes.string,
    productInfo: PropTypes.string,
}