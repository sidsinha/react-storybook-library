export const handleAnalytics = (...rest) => {

    const action = rest[0];
    const dataLayerObject = {};
    let tracking = false;

    const handleToggleAnalytics = (icon) => {
        dataLayerObject['event'] = 'link';
        switch(icon) {
            case 'list':
                dataLayerObject['linkValue'] = 'List View';
                tracking = true;
                break;
            case 'grid':
                dataLayerObject['linkValue'] = 'Grid View';
                tracking = true;
                break;
            default:
                break;
        }
    }
    const handlePlaylistTitle = url => {
        dataLayerObject['event'] = 'collectionTitleClick';
        dataLayerObject['linkValue'] = url;
        dataLayerObject['linkPosition'] = 'Title';
        tracking = true;
    }
    const handlePlaylistContributor = url => {
        dataLayerObject['event'] = 'collectionContributorClick';
        dataLayerObject['linkValue'] = url;
        dataLayerObject['linkPosition'] = 'Contributor';
        tracking = true;
    }

    const handleButtonClick = (event, linkValue) => {
        dataLayerObject['event'] = event;
        dataLayerObject['linkValue'] = linkValue;
        tracking = true;
    }

    const handleShareButtonClick = (source) => {
        dataLayerObject['event'] = 'Share';
        dataLayerObject['sharingMethod'] = source.charAt(0).toUpperCase() + source.slice(1);
        tracking = true;
    }

    const handleHeadingClick = (event, linkType, linkValue) => {
        dataLayerObject['event'] = event;
        dataLayerObject['linkType'] = linkType;
        dataLayerObject['linkValue'] = linkValue;
        tracking = true;
    }

    const handleToggleOpen = (event, linkValue, articleTitle, linkURL) => {
        dataLayerObject['event'] = event;
        dataLayerObject['linkValue'] = linkValue;
        dataLayerObject['articleTitle'] = articleTitle;
        dataLayerObject['linkURL'] = linkURL;
        tracking = true;
    }

    switch(action){
        
        case 'displayToggle':
            handleToggleAnalytics(rest[1]);
            break;
        case 'playlistTitle':
            handlePlaylistTitle(rest[1]);
            break;
        case 'playlistContributor':
            handlePlaylistContributor(rest[1]);
            break;
        case 'buttonLink':
            handleButtonClick(rest[1], rest[2]);
            break;
        case 'share':
            handleShareButtonClick(rest[1]);
            break;
        case 'Heading':
            var obj = rest[1];
            handleHeadingClick(rest[1], obj.event, obj.title);
            break;
        case 'toggleOpen':
            var obj = rest[1];
            handleToggleOpen(obj.event, obj.linkValue, obj.articleTitle, obj.linkURL);
            break;
        default:
            break;
            
    }
    if(tracking){
        console.log('dataLayerObject', dataLayerObject);
        // If 'GA_AKP' object found on AKNSITE page DOM, then push 'dataLayerObject' for Analytics
        if(typeof GA_AKP != 'undefined') {
            GA_AKP.dataLayerSend(dataLayerObject);
        }
    }
}