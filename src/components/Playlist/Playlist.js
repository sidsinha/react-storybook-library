import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Dotdotdot from 'react-dotdotdot';

/* Context */
import TanslatedTextContext from './../../context/traslatedText-context';
/*  Custom Components */
import EnvUrlChange from '../../HOC/EnvUrlChange';
import ListItem from './ListItem';
import { LeftCaret, RightCaret } from './../Icons/SVGIcons';
import IconProfile from './../IconProfile'
/* Styles */
import * as vars from './../Styled/variables';
import * as Styles from './../Styled/styles';
import { StylePlaylist } from './../Styled/Playlist';
/* Utils */
import * as utils from './../../utils/handleAnalytics';

class Playlist extends Component {
    constructor(props){
        super(props);
        this.actiteItem = this.actiteItem.bind(this);

        this.state = {
            currentId: this.props.currentId
        };
        this.handleTitleClick = this.handleTitleClick.bind(this);
    }

    static contextType = TanslatedTextContext;

    itemSet = [];

    componentDidMount(){

        this.enableDisableCaret(this.props.currentId);
        ReactDOM.findDOMNode(this).addEventListener('click', this.handleAnalyticsClick); 

        /* Scroll to the elment on load, under Playlist */
        var elmnt = document.getElementById(`item${this.props.currentId}`);
        var playlistContainer = document.getElementById('playlistContainer');
        playlistContainer.scrollTop = elmnt.offsetTop - playlistContainer.offsetTop;
    }

    handleTitleClick() {
        //Tracking Analytics
        utils.handleAnalytics('playlistTitle', this.props.pageUrl);

        //reloading the page with collection url
        top.location = this.props.pageUrl;
    }
    handleAnalyticsClick(evt){
        let target = evt.target;
        let targetElem = target.className;
        
        if(targetElem.baseVal){
            targetElem = targetElem.baseVal;
        }

        let dataLayerObject = {};
        let tracking = false;

        switch(targetElem){
            case 'vertical-dots':
                dataLayerObject['event'] = 'link';
                dataLayerObject['linkValue'] = 'Collection Playlist_Menu Open';
                tracking = true;
                break;
            case 'caret-left':
                dataLayerObject['event'] = 'link';
                dataLayerObject['linkValue'] = 'Collection Playlist_Previous';
                tracking = true;
                break;
            case 'caret-right':
                dataLayerObject['event'] = 'link';
                dataLayerObject['linkValue'] = 'Collection Playlist_Next';
                tracking = true;
                break;
            default:
                break;
        }

        //If 'GA_AKP' object found on AKNSITE page DOM, then push 'dataLayerObject' for Analytics
        if(tracking & typeof GA_AKP != 'undefined') {
            GA_AKP.dataLayerSend(dataLayerObject);
        }  
    }
    enableDisableCaret(currentId) {
        const prevItemCaret = document.getElementById('prevItem').getElementsByTagName('svg')[0];
        const nextItemCaret = document.getElementById('nextItem').getElementsByTagName('svg')[0];

        prevItemCaret.setAttribute("style", "fill: #000;");
        nextItemCaret.setAttribute("style", "fill: #000;");

        if(this.props.totalItems === 1){
            prevItemCaret.setAttribute("style", "fill: #aaa;");
            nextItemCaret.setAttribute("style", "fill: #aaa;");
            prevItemCaret.style.cursor = 'not-allowed';
            nextItemCaret.style.cursor = 'not-allowed';
        }
        else if(currentId <= 1) {  
            prevItemCaret.setAttribute("style", "fill: #aaa;");
            prevItemCaret.style.cursor = 'not-allowed';
        }else if(currentId >= this.props.items.length &&  this.props.items.length) {  
            nextItemCaret.setAttribute("style", "fill: #aaa;");
            nextItemCaret.style.cursor = 'not-allowed';
        }else {
            prevItemCaret.removeAttribute("style", "fill: #aaa;");
            nextItemCaret.removeAttribute("style", "fill: #aaa;");
        }
    }
    actiteItem(currentId, source){

        const clickSource = source ? source : 'caretClick';

        const getItem = this.props.items.filter(item => currentId === item.id);
        const contentUrl = getItem[0].contentUrl;
        
        if(this.props.siteEnv) {
            if(getItem[0].isInternal){
                window.location.assign(contentUrl);
            }else {
                window.open(contentUrl, '_blank');
            }
        }else {
            if(currentId >= 1 & currentId <= this.props.items.length)
            this.setState({currentId});
        
            this.enableDisableCaret(currentId);
        }
        
        if(clickSource === 'titleClick') {
            let dataLayerObject = {};
            dataLayerObject['event'] = 'collectionArticleClick';
            dataLayerObject['linkValue'] = contentUrl;
            dataLayerObject['linkPosition'] = currentId;
            
            //If 'GA_AKP' object found on AKNSITE page DOM, then push 'dataLayerObject' for Analytics
            if(typeof GA_AKP != 'undefined') {
                GA_AKP.dataLayerSend(dataLayerObject);
            } 
        }
    }

    gotoPage = page => {
        const { onPageChanged = f => f } = this.props;

        const currentPage = Math.max(0, Math.min(page, this.props.totalPages));

        this.setState({ currentPage }, () => onPageChanged(currentPage));
    };

    
    handleScroll = (evt) => {

        // Load next set of items, if they exist.
        if (evt.target.offsetHeight + evt.target.scrollTop > evt.target.scrollHeight && this.props.currentPage < this.props.totalPages) {
            this.LoadNext();
        }
        // Load previous set of items, if they exist.
        if (evt.target.scrollTop === 0 && this.props.currentPage > 1) {
            this.LoadPrev();
        }
    };

    LoadPrev = evt => {
        this.gotoPage(this.props.currentPage - 1);  
    };
    
    LoadNext = evt => {
        this.gotoPage(this.props.currentPage + 1); 
    };

    render(){

        const {heading, totalItems, currentId} = this.props;
        const currentPage = (typeof this.props.currentPage === "undefined") ? 1 : this.props.currentPage;
        var items = [];

        // Build out the full items set, since we want to append items, not replace items.
        if (this.props.items.length) {
            this.itemSet[currentPage] = this.props.items;
            this.itemSet.forEach(itemsarr => {
                for (var key in itemsarr) {
                    items[key] = itemsarr[key];
                }
            }); 
        }

        return (
            <Fragment>
                <Styles.GlobalStyle />
                <StylePlaylist />
                <div className={`${vars.prefix}_playlist` }>
                    <div className={`${vars.prefix}_playlist__header` } data-nodeid={this.props.nodeId} data-type="playlist" data-source="collection">
                        <div className="collection_title">
                            <Dotdotdot clamp={2}>
                                <a href="javascript:void(0);" onClick={this.handleTitleClick} className="dotted_link">
                                    {heading}
                                </a>
                            </Dotdotdot>
                        </div>
                        {
                            this.props.authorName ? 
                                <IconProfile 
                                    className="playlist_author" 
                                    avatarSize="22px" 
                                    avatarBgColor={vars.brownishGrey} 
                                    textSize="14px" 
                                    authorName={this.props.authorName} 
                                    authorAvatar={this.props.authorAvatar} 
                                    authorUrl={this.props.authorUrl} 
                                /> : ''
                        }
                        
                    </div>
                    <div className={`${vars.prefix}_playlist__container`} id="playlistContainer" onScroll={e => this.handleScroll(e)}>
                        {
                            items.map((item, index) => (
                                    <ListItem 
                                        item = {item} 
                                        index={index} 
                                        onClick={this.actiteItem}
                                        currentId={currentId}
                                        siteEnv={this.props.siteEnv}
                                        displayIndex={this.props.displayIndex}
                                    />
                            ))
                        }
                    </div>
                    <div className={`${vars.prefix}_playlist__footer`}>
                        <span className={`${vars.prefix}_playlist__footer_lt`} id="prevItem" onClick={() => this.actiteItem(currentId-1)}>
                            <LeftCaret />
                        </span>
                        <span className={`${vars.prefix}_playlist__footer_count`}>
                            {currentId}/{totalItems}
                        </span>
                        <span className={`${vars.prefix}_playlist__footer_gt`} id="nextItem" onClick={() => this.actiteItem(currentId+1)}>
                            <RightCaret />
                        </span>
                    </div>
                </div>
            </Fragment>
        )
    }
}

Playlist.defaultProps = {
    heading: '',
    currentId: 1,
    items: [],
    pageUrl:'',
    siteEnv: ''
}

export default EnvUrlChange(Playlist);