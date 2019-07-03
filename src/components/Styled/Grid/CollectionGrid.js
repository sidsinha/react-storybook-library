import { createGlobalStyle } from 'styled-components';
import * as vars from './../variables';

export const CollectionGrid = createGlobalStyle`
    #${vars.prefix}_grid {
        width: 25%;
        float: left;
        background-color: ${vars.offwhite};

        .flex-container{
            display: flex;
            flex-direction: column;
            border: 1px solid ${vars.grey};
            margin: 10px;

            .media {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;

                .media-img-overlay {
                    background: url('https://knowledge.autodesk.com/sites/all/themes/autodesk_foundation5/images/search/search-thumb-icons.png');
                    position: absolute;
                    width: 55px;
                    height: 55px;
                    bottom: 0;
                    left: 0;
                    &.contributedlink {
                        background-position: -55px 0;
                    }
                    &.screencast {
                        background-position: -110px 0;
                    }
                    &.youtube {
                        background-position: -165px 0;
                    }
                    &.forums {
                        background-position: -220px 0;
                    }
                    &.sfdcarticles {
                        background-position: -275px 0;
                    }
                    &.auonline {
                        background-position: -330px 0;
                    }
                    &.blog {
                        background-position: -385px 0;
                    }
                    &.downloads {
                        background-position: -440px 0;
                    }
                    &.collection {
                        background-position: -495px 0;
                    }
                }
            }
            .content-outer{
                display: flex;
                // height: 200px;
                .description {
                    width: 92%;
                    .content-wrapper {
                        padding: 15px;
                        position: relative;
                        h3 {
                            width: 100%;
                            margin-top: 0;
                            margin-bottom: 15px;
                            line-height: 28px;
                            height: 60px;
                            overflow: hidden;
                            a {
                                color: inherit;
                                text-decoration: none;
                                border-bottom: 1px dashed ${vars.brownishGrey} !important;
                                &:hover {
                                    border-bottom: 1px solid ${vars.darkGrey} !important;
                                }
                            }
                        }
                    }
                }
                .menu-item {
                    width: 8%;
                    display: flex;
                    justify-content: center;
                    position: relative;
                    top: 5px;
                    .externalicon-grid {
                        position: relative;
                        top: 15px;
                        right: 3px;
                        a {
                            border-bottom: none !important;
                            &:hover {
                                border-bottom: none !important;
                            }
                        }
                    }
                }
            }
            
        }
    }
`;

export default CollectionGrid;
