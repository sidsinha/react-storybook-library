import React, { Component } from 'react';

const ImageLoader = (WrappedComponent) => {

    return class ImageLoader extends Component {

        static defaultProps = {
            type: '', //circle etc
            w: '133px',
            h: 'auto',
            bgColor: '#fff',
            imagePath: '',
            fill: true,
            stretch: false,  
            alt: '',
            placeholderImage: 'https://knowledge.autodesk.com/sites/all/themes/autodesk_foundation5/images/standard/defaultThumbnail.gif',
        }

        render(){
            const styles =  {
                'width': this.props.w,
                'height': this.props.h,
                'backgroundColor': this.props.bgColor
            }
            const imagePath = this.props.imagePath ? this.props.imagePath : this.props.placeholderImage;

            var customCSS = {};

            customCSS.height = this.props.fill ? '100%' : 'auto';
            customCSS.width = this.props.stretch ? '100%' : null;
            if(this.props.type === 'circle') {
                customCSS.borderRadius = '50%';
            }

            return <WrappedComponent {...this.props} styles={styles} imagePath={imagePath} customCSS={customCSS} />
        }
    }
}

export default ImageLoader;