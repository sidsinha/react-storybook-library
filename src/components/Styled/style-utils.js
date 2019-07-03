// style-utils.js

import "../../scss/_normalizer.scss";
import "../../scss/_fontsAkn.scss";
import "../../scss/_variables.scss";

export function wrapper() {
    return `
        font-family: 'ArtifaktElement';
    `;
}

export function heading(heading) {
    var style = '';
    
    switch(heading) {
        
        case 'H1':
            style = `
                font-size: 50px;
                line-height: 50px;
                color: #222;
            `;
            break;
        
        case 'H2':
            style = `
                font-family: "ArtifaktElementLight";
                font-size: 30px;
                line-height: 35px;
                color: #222;
                font-weight: 300;
            `;
            break;
        
        case 'H3':
            style = `
                font-family: "ArtifaktElementMedium";
                font-size: 21px !important;
                line-height: 25px;
                color: #444;
            `;
            break;

        case 'H4':
            style = `
                font-family: "ArtifaktElementLight";
                font-size: 19px;
                line-height: 24px;
                color: #222;
                font-weight: 300;
            `;
        break;

        case 'H5':
            style = `
                font-family: "ArtifaktElementMedium";
                font-size: 16px;
                line-height: 21px;
                color: #222;
            `;
            break;

        case 'H6':
            style = `
                font-family: "ArtifaktElementMedium";
                font-size: 14px;
                line-height: 19px;
                color: #222;
            `;
            break;

        default:
            break;
    }
    return style;
}
export function mediumText() {
    return `
        font-family: "ArtifaktElement";
        font-size: 16px;
        font-weight: normal;
        line-height: 22px;
        color: #666;
    `;
}
export function smallText() {
    return `
        font-family: "ArtifaktElement";
        font-size: 14px;
        font-weight: normal;
        color: #666;
        line-height: 18px;
    `;
}
export function button() {

    return `
        font-size: 1em;
        padding: 4px 10px;
        border: 2px solid #0696d7;
        border-radius: 3px;
        margin: 15px 10px 0 0;
        cursor: pointer;
    `;
}
export function iconProfile() {
    return `     
        color: #666;
        display: flex;
        align-items: center;
        h4 {
            margin: 10px;
            a {
                text-decoration: none;
                color: inherit;
            }
        }
        
    `;
}
export function productInfoToggle() {
    return `
        font-size: 12px;
        line-height: 20px;
        span.caret {
            padding-left: 5px;
            cursor: pointer
        }
        .product-info {
            display: none;
            &.show {
                display: block;
            }
        }
    `;
}
export function shareIcons() {
    return `
        display: flex;
        justify-content: space-between;
        .some-network {
            display: inline-block;
            cursor: pointer;
        }
    `;
}
export function reportItem() {
    return `
        textarea {
            width: 100%;
            margin-top: 10px;
            height: 50px;
            color: #666;
        }
        .report-title {
            text-align: left;
            font-weight: bold;
        }
    `;
}
export function collapseTab() {
    return `
        p.heading {
            display: flex;
            align-items: center;
            color: #666;
            cursor: pointer;
            &:hover {
                font-weight: 600;
                color: #666666;
                background-color: #f5f5f5;
            }
            svg {
                margin-right: 10px;
            }
        }
        .content{
            font-size: 14px;
            display:none;

            .some-network {
                display: inline-block;
                margin-right: 5px;
                cursor: pointer;
            }
        }
        .content.active{
            display:block;
        }
    `;
}