import React from 'react';

import ImagerLoader from '../../HOC/ImageLoader';
import './Image.scss';

const image = props => {
    const {
        styles,
        customCSS,
        imagePath,
        alt
    } = props;
    return(
        <div className="__load_image" style={styles}>
            <img style={customCSS} src={imagePath} alt={alt} />
        </div>
    )
}

export default ImagerLoader(image);