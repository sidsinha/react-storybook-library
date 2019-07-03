import React, { useContext } from 'react';
import PropTypes from 'prop-types';

/*  Custom Components */
import Flyout from './../Flyout';
import HandleShareReportTabbing from './../../utils/handleShareReportTabbing'
import Share from './../Share';
import Report from './../Report';
import { AddIcon, ShareIcon, FlagIcon, VerticalDotsIcon } from '../Icons/SVGIcons';
/* Context */
import ActionMenuContext from './../../context/actionMenu-context';
import TanslatedTextContext from './../../context/traslatedText-context';
/* Styles */
import * as Styles from '../Styled/styles';
import './ActionMenu.scss';

const actionMenu = props => {
    const tanslatedTextContext = useContext(TanslatedTextContext);
    const {
        type,
        iconColor,
        items,
        shareUrl,
        nodeId,
        reportTitle
    } = props;

    const closeAllModel = (currentEl) => {
        const getWraperContent = document.querySelectorAll('.flyout-content');

        getWraperContent.forEach(function(key){
            if(currentEl){
                if(currentEl !== key){
                    key.classList.remove('open');
                }
            }else {
                key.classList.remove('open');
            }
            
        });
    }

    const handleAnalytics = (type, shareSource) => {

        let dataLayerObject = {};
        let tracking = false;

        switch(type){
            case 'share':
                dataLayerObject['event'] = 'collectionShare';
                dataLayerObject['sharingMethod'] = shareSource;
                dataLayerObject['sharingContent'] = shareUrl;
                tracking = true;
                break;
            case 'report':
                dataLayerObject['event'] = 'collectionReport';
                dataLayerObject['reportingContent'] = shareUrl;
                tracking = true;
                break;
            default:
                break;
        }

        console.log('handleAnalytics', dataLayerObject);

        //If 'GA_AKP' object found on AKNSITE page DOM, then push 'dataLayerObject' for Analytics
        if(tracking & typeof GA_AKP != 'undefined') {
            GA_AKP.dataLayerSend(dataLayerObject);
        }
    }

    if(type === 'verticalDots') {

        return(
            <div className="action-item-dots">
                <ActionMenuContext.Provider value={{
                    handleAnalytics: handleAnalytics,
                    closeAllModel: closeAllModel,
                    shareUrl: shareUrl,
                    reportTitle: reportTitle,
                    reportWithText: true
                }}>
                    <Flyout closeAll={true}>
                        <section className="flyout-click">
                            <VerticalDotsIcon color={iconColor} />
                        </section>
                        <span>
                            <ActionMenuContext.Provider value={{
                                handleAnalytics: handleAnalytics,
                                shareUrl: shareUrl,
                                reportTitle: reportTitle
                            }}>
                                <HandleShareReportTabbing items={items} />
                            </ActionMenuContext.Provider>
                            <Styles.StyledShareReportTab>
                                <AddToCollection />
                            </Styles.StyledShareReportTab>
                            
                        </span>     
                    </Flyout>
                </ActionMenuContext.Provider>
            </div>
        )
    } 
    else if(type === 'horizontalDisplay'){  
        let displayShare, displayReport = false;

        if(items.includes('share')){
            displayShare = true;
        }
        if(items.includes('report')){
            displayReport = true;
        }
        return(
            <div className="action-item-horiz">
                <ActionMenuContext.Provider value={{
                    nodeId: nodeId,
                    handleAnalytics: handleAnalytics,
                    closeAllModel: closeAllModel,
                    shareUrl: shareUrl,
                    reportTitle: reportTitle,
                    reportWithText: true
                }}>
                    {
                        displayShare ?  <Flyout closeAll={true}>
                                            <section className="flyout-click">
                                                <ShareIcon size="10" color="#666" /> {tanslatedTextContext.textShare} 
                                            </section>
                                            <section>
                                                <Share shareUrl={shareUrl} />
                                            </section>     
                                        </Flyout> : ''
                    }
                    {
                        displayReport ? <Flyout closeAll={true}>
                                            <section className="flyout-click">
                                            <FlagIcon size="10" color="#666" /> { tanslatedTextContext.textReport } 
                                            </section>
                                            <section>
                                                <Report reportTitle={reportTitle} />
                                            </section>     
                                        </Flyout> : ''
                    }
                    
                </ActionMenuContext.Provider>
            </div>
        )
    }
}

export default actionMenu;

/*  Declare Prop Types */
actionMenu.propTypes = {
    type: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    items: PropTypes.array,
    shareUrl: PropTypes.string,
    nodeId: PropTypes.string,
    reportTitle: PropTypes.string
}
// Set default props
actionMenu.defaultProps = {
    type: 'verticalDots', //verticalDots | horizontalDisplay
    items: ['report', 'share']
};

const AddToCollection = () => {
    const tanslatedTextContext = useContext(TanslatedTextContext);
    return(
        <p className="heading add-to-collection-from-menu">
            <AddIcon />
            { tanslatedTextContext.textAddToCollection }
        </p>
    )
}