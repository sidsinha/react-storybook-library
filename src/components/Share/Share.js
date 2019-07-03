import React, { useContext } from 'react';

/*  External Components */
import {
    FacebookShareButton, FacebookIcon,
    TwitterShareButton, TwitterIcon,
    LinkedinShareButton, LinkedinIcon,
    TumblrShareButton, TumblrIcon,
    EmailShareButton, EmailIcon
} from 'react-share';
/* Context */
import ActionMenuContext from './../../context/actionMenu-context';
/* Styles */
import * as Styles from './../Styled/styles';
/* Utils */
import * as utils from './../../utils/handleAnalytics';

const Share = props => {
    let usingProps = false;
    const shareContext = useContext(ActionMenuContext);
    let { shareUrl, handleAnalytics } = shareContext;

    if(!shareUrl) {
        shareUrl = props.shareUrl;
        usingProps = true;
    }

    const handleClick = (source) => {
        if(!usingProps) {
            handleAnalytics('share', source);
        }else {
            utils.handleAnalytics('share', source);
        }
        
    }
    return(
        <Styles.StyledShareIcons>
            <div className="some-network" onClick={e => handleClick('facebook')}>
                <FacebookShareButton url={shareUrl} >
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
            </div>
            <div className="some-network" onClick={e => handleClick('twitter')}>
                <TwitterShareButton url={shareUrl} >
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
            </div>
            <div className="some-network" onClick={e => handleClick('linkedin')}>
                <LinkedinShareButton url={shareUrl} >
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
            </div>
            <div className="some-network" onClick={e => handleClick('tumblr')}>
                <TumblrShareButton url={shareUrl} >
                    <TumblrIcon size={32} round={true} />
                </TumblrShareButton>
            </div>
            <div className="some-network" onClick={e => handleClick('email')}>
                <EmailShareButton url={shareUrl} >
                    <EmailIcon size={32} round={true} />
                </EmailShareButton>
            </div>
        </Styles.StyledShareIcons>
    )
}

export default Share;