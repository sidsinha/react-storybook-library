import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Dotdotdot from 'react-dotdotdot'

/*  Custom Components */
import Image from './../Image';
/* Context */
import CollListingContext from './../../context/collListing-context';
/* HOCs */
import DateFormatter from './../../HOC/DateFormatter';
import WithTheme from '../../HOC/WithTheme';
/* Styles */
import './List.scss';
import * as Styles from '../Styled/styles';

const list = props => {
    const context = useContext(CollListingContext);

    const {item} = props;
    const {
        id, 
        title, 
        publishDate,
        shortDescription,
        thumbnailURL,
        contentUrl,
    } = item;
    const {
        cardData,
        sourceIcon,
        hrefTarget,
        actionMenu
    } = props.aknProps;

    const showIndex = context.displayIndex ? `${id}.` : null;

    return(
        <div className="teaser__list collection-card">
            {cardData}
            <div className="media">
                <Image h='144px' w='auto' imagePath={thumbnailURL} />
                {sourceIcon}
            </div>
            <div className="sno">{showIndex}</div>
            <div className="description">
                <div className="content-wrapper">
                    <Styles.StyledH3>
                        <a href={contentUrl} target={hrefTarget}>
                            <Dotdotdot clamp={2}>
                                {title}
                            </Dotdotdot>
                        </a>
                    </Styles.StyledH3>
                    <Styles.StyledTimestamp>
                        {publishDate}
                    </Styles.StyledTimestamp>
                    <Styles.StyledDescription>
                        <Dotdotdot clamp={2}>
                            {shortDescription}
                        </Dotdotdot>
                    </Styles.StyledDescription>
                </div>
            </div>
            {actionMenu}
        </div>
    )
}

export default WithTheme(DateFormatter(list),'list');

/*  Declare Prop Types */
list.propTypes = {
    item: PropTypes.object.isRequired,
    view: PropTypes.string
}