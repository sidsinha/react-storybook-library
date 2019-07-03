
import React, { Component } from 'react';

const EnvUrlChange = (WrappedComponent) => {

    return class EnvUrlChange extends Component {
        
        changeUrl(originalUrl=''){
            
            let url = '';
            let domain = '';
            const env = this.props.siteEnv;

            const split = originalUrl.toString().split('.com/');
            
            switch(env){
                case 'whdev':
                    domain = split[0].replace(split[0], "https://knowledge-local.autodesk.com/");
                    url = `${domain}${split[1]}`;
                    break;
                case 'dev':
                    domain = split[0].replace(split[0], "https://knowledge-dev.autodesk.com/");
                    url = `${domain}${split[1]}`;
                    break;
                case 'int':
                    domain = split[0].replace(split[0], "https://knowledge-int.autodesk.com/");
                    url = `${domain}${split[1]}`;
                    break;
                case 'stg':
                    domain = split[0].replace(split[0], "https://knowledge-staging.autodesk.com/");
                    url = `${domain}${split[1]}`;
                    break;
                default:
                    url = originalUrl;
                    break;
            }
            return url;      
        }

        render(){
            // console.log('EnvUrlChange', this.props);

            let getNewItems, getNewpageUrl, getNewAuthorUrl;

            if(this.props.items && this.props.items.length){
                getNewItems = this.props.items.map((item) => {
                    item.contentUrl = this.changeUrl(item.contentUrl);
                    return item;
                });
            }
            if(this.props.pageUrl) {
                getNewpageUrl = this.changeUrl(this.props.pageUrl);
            }
            if(this.props.authorUrl) {
                getNewAuthorUrl = this.changeUrl(this.props.authorUrl);
            }
            
            
            return <WrappedComponent {...this.props} items={getNewItems} pageUrl={getNewpageUrl} authorUrl={getNewAuthorUrl}  />
        }
    }
}

export default EnvUrlChange;