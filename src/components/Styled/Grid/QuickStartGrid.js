import { createGlobalStyle } from 'styled-components';
import * as vars from '../variables';

export const QuickStartGrid = createGlobalStyle`

    #${vars.prefix}_grids__cols{
        display: flex;

        .flex_cols {
            display: flex;
            flex-direction: column;
            width: 33%
        }
        .col3 {
        width: 33%
        }
        .col2 {
        width: 50%
        }
        .col1 {
        width: 100%
        }

        #${vars.prefix}_grid {
            width: 33%;
            float: left;
    
            .flex-container{
                display: flex;
                flex-direction: column;
                border: 1px solid ${vars.medGrey};
                margin: 10px;
                &:hover {
                    box-shadow: 0px 2px 5px #aaa;
                }
                .media {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
    
                    .__load_image {
                        float: inherit;
                        max-height: 82px;
                        display: flex;
                        align-items: center;
                        img {
                            width: 100%;
                            position: static;
                            left: 0;
                            right: 0;
                            transform: none;
                            height: auto !important;
                        }
                    }
                }
                .content-outer{
                    background-color: ${vars.white}
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
                                line-height: 32px;
                                height: 63px;
                                overflow: hidden;
                                color: ${vars.brownishGrey}
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
    }
    
`;

export default QuickStartGrid;
