import { createGlobalStyle } from 'styled-components';
import * as vars from './variables';

export const StylePlaylist = createGlobalStyle`
    .${vars.prefix}_playlist {
        font-size: 14px;
        width: 275px;
        border: #666;
        &__header{
            background: #666;
            border: 1px solid #666;
            position: relative;
            display: flex;
            flex-direction: column;

            .collection_title {
                color: #fff;
                font-weight: bold;
                margin: 10px;
                line-height: 22px;
                max-height: 44px;
                overflow: hidden;
                a.dotted_link {
                    color: ${vars.white};
                    text-decoration: none;
                    border-bottom: 1px dashed ${vars.white};
                    &:hover {
                        border-bottom: 1px solid ${vars.white};
                    }
                  }
                
            }
            .playlist_author {
                margin: 4px 10px 10px;
                h4 {
                    color: #c2c2c2;
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    a{
                        color: #c2c2c2;
                        text-decoration: none;   
                    }
                    margin: 0 0 0 10px;
                }
            }
        }
        &__container{
            border: 1px solid #ccc;
            max-height: 300px;
            overflow-y: auto;
            position: relative;
            p.title {
                margin: 0;
                padding: 15px 15px;
                border-left: 5px solid transparent;
                &:hover, &.active {
                    color: ${vars.blue};
                    cursor: pointer;
                    border-left: 5px solid ${vars.blue};
                }
                .externalicon-playlist {
                    margin-left: 10px;
                }
            }
            svg * {
                fill: #fff; 
            }
        }
        &__footer {
            background: #ccc;
            color: #000;
            padding: 8px;
            text-align: center;
            border: 1px solid #ccc;
    
            &_lt {
                float: left;
                position: relative;
                bottom: 2px;
                cursor: pointer;
            }
            &_gt {
                float: right;
                position: relative;
                bottom: 2px;
                cursor: pointer;
            }
        }
    }
`;

export default StylePlaylist;
