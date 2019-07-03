import { createGlobalStyle } from 'styled-components';
import * as vars from './variables';

export const StyleQuickStartGuide = createGlobalStyle`
    #${vars.prefix}_quickstart_guide {
        display: flex;
        flex-direction: column;
        background-color: ${vars.offwhite};
        padding: 25px;

        h2{
            margin: 0;
            padding-bottom: 15px;
            margin-left: 10px;
            border-bottom: 1px solid ${vars.grey};
            font-size: 30px;
            color: ${vars.darkGrey}
        }
        section.action {
            color: ${vars.darkGrey}
            display:flex;
            justify-content: space-between;
            margin-top: 10px;
            margin-left 10px;
            width: 150px;
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
            .pipe {
                color: ${vars.lightGrey2}
            }
            .akn_react_flyout {
                margin-right: 0;
                .flyout-container {
                    padding: 0;
                    a {
                        text-decoration: none;
                        color: inherit;
                        font-weight: inherit;
                        font-size: inherit;
                    }
                    .flyout-content {
                        right: inherit;
                        .menu-triangle {
                            right: inherit;
                            left: 15px;
                        }
                    }
                }
            }
        }
        section.description {
            margin-top: 15px;
            margin-left: 10px;
            margin-bottom: 28px;
            max-width: 800px;
            line-height: 21px;
            font-size: 16px;
        }
        .action_link {
            margin-top: 25px;
            margin-left: 10px;
        }
    }
`;

export default StyleQuickStartGuide;
