import React, { useContext } from 'react';

/*  Custom Components */
import ActionMenu from '../components/ActionMenu';
import Image from './../components/Image';
/* Context */
import TanslatedTextContext from './../context/traslatedText-context';

const WithAKNTheme = (WrappedComponent, param) => {
    
    return props => {
        const tanslatedTextContext = useContext(TanslatedTextContext);
        const type = param ? param : ''
        const {item, view} = props;

        const {
            id, 
            title, 
            nodeId,
            source,
            isInternal,
            contentUrl,
            caasKey,
            thumbnailURL,
            articleTopics
        } = item;

        const aknProps = {};
        const customProps = {};

        //default setup
        customProps.imgWidth = "200px";
        customProps.showDate = true;

        let actionMenu, cardData, externalIcon, hrefTarget, sourceIcon, cardImage = '';
        
        cardImage = <Image w='100%' h='200px' imagePath={thumbnailURL} />;

        if(view === 'collection'){
            cardImage = <Image w='100%' h='200px' imagePath={thumbnailURL} stretch={true} />;

            hrefTarget = !isInternal ? '_blank': '';

            cardData =  <div className="collection-card-data" 
                            data-nodeid={nodeId} 
                            data-source={source} 
                            data-url={contentUrl} 
                            data-caas={caasKey} 
                            data-title={title}>
                        </div>;
            
            externalIcon = !isInternal ? <span className={`externalicon-${type}`}>
                                            <a href={contentUrl} target="_blank">
                                                    <img src="https://knowledge.autodesk.com/sites/all/themes/autodesk_foundation5/images/standard/externalLink.gif" />
                                                </a>
                                         </span> : '';

            actionMenu = <div className="menu-item">
                                {externalIcon}
                                <ActionMenu 
                                    type="verticalDots"
                                    items={['share', 'report', 'addToCollection']}
                                    shareUrl={contentUrl} 
                                    reportTitle={tanslatedTextContext.textReportArticle}
                                />
                         </div>;

            sourceIcon = source ? <div className={`media-img-overlay ${source}`}></div> : '';
        
            //Assigning AKN Props with new Details
            aknProps.cardData = cardData;
            aknProps.externalIcon = externalIcon;
            aknProps.hrefTarget = hrefTarget;
            aknProps.actionMenu = actionMenu;
            aknProps.sourceIcon = sourceIcon;
        }
        else if(view === 'quickstartguide'){
            cardImage = <Image w='100%' imagePath={thumbnailURL} />;

            customProps.showDate = false;
            customProps.showCollapseTab = true;
            customProps.articleTopics = [];
            if(articleTopics){
                customProps.articleTopics = articleTopics.split(',');
            }
            
        }

        customProps.cardImage = cardImage;

        return <WrappedComponent {...props} aknProps={aknProps} customProps={customProps} />
    }
}

export default WithAKNTheme;