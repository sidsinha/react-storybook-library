import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

/*  Custom Components */
import ActionMenu from './../ActionMenu';
import ToggleIcon from './../ToggleIcon';
import ItemListing from './ItemListing';
import Pagination from './../Pagination';
import ErrorBoundary from '../ErrorBoundary';
import IconProfile from './../IconProfile'
/* Context */
import CollListingContext from './../../context/collListing-context';
import TanslatedTextContext from './../../context/traslatedText-context';
/* HOCs */
import EnvUrlChange from '../../HOC/EnvUrlChange';
import ScreenBreakpoint from './../../HOC/ScreenBreakpoint';
/* Styles */
import './CollectionListing.scss';
import * as Styles from './../Styled/styles';

const customStyle = {
  width: '80%'
}

const collectionListing = props => {

  const {
    displayType,
    displayIndex,
    authorName,
    authorAvatar,
    authorUrl,
    pageUrl,
    nodeId,
    heading,
    description,
    productInfo,
    items, 
    view,
    currentPage,
    totalPages,
    totalItems,
    pageLimit,
    onPageChanged,
    
    textProductsCovered,
    textShare,
    textReport,
    textCancel,
    textAddToCollection,
    textReportArticle,
    textReportCollection,
    textReportingReason

  } = props;


  const [displayTypeState, setDisplayTypeState] = useState('list');
  const [currentItems, setCurrentItems] = useState([]);

  const displayHandler= (type) => {
    setDisplayTypeState(type);
  }

  useEffect(() => {
    setCurrentItems(items);
  },[items.length]);
  
  useEffect( () => {
    const collectionListingPage = document.getElementById('collection-list-page');
    collectionListingPage.addEventListener('click', OutsideClickHandle);
  },[]);

  //Closing all opne flyout models when cliked outside
  const OutsideClickHandle = (e) => {
    const target = e.target ? e.target : e.srcElement;
    const ifClickedOutSideFlyout = target.closest('.akn_react_flyout');
    if(!ifClickedOutSideFlyout){
      const getWraperContent = document.querySelectorAll('.flyout-content');  
      getWraperContent.forEach(function(key){
        key.classList.remove('open');
      });
    }

  }

  const displayTypeProps = displayType ? displayType : displayTypeState;
  
  return(    
    <div id="collection-list-page">
        <Styles.StyledH2WithLine>
          {heading}
        </Styles.StyledH2WithLine>
        <TanslatedTextContext.Provider value={{
          textProductsCovered,
          textShare,
          textReport,
          textCancel,
          textAddToCollection,
          textReportArticle,
          textReportCollection,
          textReportingReason
        }}>
          <IconProfile 
            authorName={authorName}
            authorAvatar={authorAvatar}
            authorUrl={authorUrl}
            productInfo={productInfo}
          />
          <div className="share-option">
            <ActionMenu 
              type="horizontalDisplay"
              items={['share', 'report']}
              reportTitle={textReportCollection}
              shareUrl={pageUrl} 
              nodeId={nodeId}
            />
          </div>
        </TanslatedTextContext.Provider>
        <div style={customStyle}>
          <Styles.StyledSmallText>
              {description}
          </Styles.StyledSmallText>
        </div>
        <div className="grid-option">
          <ToggleIcon clickEvt={displayHandler} />
        </div>
        <div className="clear"></div>
        <CollListingContext.Provider value={{displayIndex: displayIndex }}>
          <ItemListing 
            currentItems={currentItems} 
            displayType={displayTypeProps} 
            view={view}
          />
        </CollListingContext.Provider>
        <div className="clear"></div>
        <Pagination
          totalRecords={totalItems}
          pageLimit={pageLimit}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChanged={onPageChanged}
        />
    </div>
  )
}

export default ScreenBreakpoint(EnvUrlChange(collectionListing));

/*  Declare Prop Types */
collectionListing.propTypes = {
  items: PropTypes.array.isRequired,
  displayIndex: PropTypes.bool,
  authorName: PropTypes.string,
  authorAvatar: PropTypes.string,
  authorUrl: PropTypes.string,
  pageUrl:  PropTypes.string,
  nodeId: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  productInfo: PropTypes.string,
  siteEnv: PropTypes.string,
  view: PropTypes.string
}