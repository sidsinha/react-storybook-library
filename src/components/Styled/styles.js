import styled, { createGlobalStyle } from 'styled-components';
import * as vars from './../Styled/variables';
import * as style from '../Styled';

export { GlobalStyle } from './GlobalStyle'

export const StyledWrapper = styled.div`
    ${ style.wrapper() }
`;
export const StyledH2 = styled.h2`
    ${ style.heading('H2') }
`;
export const StyledH2WithLine = styled.h2`
    ${ style.heading('H2') }
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
    margin-bottom: 10px;
`;
export const StyledH3 = styled.h3`
    ${ style.heading('H3') }
`;
export const StyledH4 = styled.h4`
    ${ style.heading('H4') }
`;
export const StyledButton = styled.button`
    ${ style.button() }
    background: ${props => props.primary ? "#0696d7 !important" : "white"};
    color: ${props => props.primary ? "white" : "#0696d7"};
`;
export const StyledDescription = styled.div`
    ${ style.mediumText() }
    overflow: hidden;
    min-height: 66px;
`;
export const StyledMediumText = styled.div`
    ${ style.mediumText() }
`;
export const StyledSmallText = styled.div`
    ${ style.smallText() }
`;
export const StyledFooter = styled.div`
    ${ style.smallText() }
`;
export const StyledTimestamp = styled.div`
    ${ style.smallText() }
    margin-bottom: 15px;
    font-weight: bold;
`;
export const StyledIconProfile = styled.div`
    ${ style.iconProfile() }
`;
export const StyledProductInfoToggle = styled.div`
    ${ style.productInfoToggle() }
`;
export const StyledShareIcons = styled.div`
    ${ style.shareIcons() }
`;
export const StyledShareReportTab = styled.div`
    ${ style.collapseTab() }
`;
export const StyledCollapseTab = styled.div`
    ${ style.collapseTab() }
    p.heading {
        font-size: 12px;
        font-weight: 500;
        color: ${vars.darkGrey2};
        padding: 5px 15px;
        margin: 0;
        border-top: 1px solid ${vars.medGrey}
        background: ${vars.white}

        &.hide {
            display: none;
        }
        &:before {
            content: "+";
            font-size: 24px;
            display: block;
            float: left;
            margin: 0 6px 0 0;
            position: relative;
            bottom: 1px;
        }
        &.activeLink{
            &:before{
                content: "-";
            }
        }
    }
    div.content {
        font-size: 16px;
        padding: 15px;
        background: ${vars.white}
        color: ${vars.brownishGrey};
        .topic_label {
            font-weight: 600;
        }
        ul.topic_list{
            margin: 10px 0;
            padding-left: 40px;
            font-size: inherit;
            color: inherit;
            li {
                line-height: 25px;
            }
        }
    }
`;
export const StyledReportItem = styled.div`
    ${ style.reportItem() }
`;
export const StyledActionLink = createGlobalStyle`
    .${vars.prefix}__actionlink {
        a {
            display: flex;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            color: ${vars.darkGrey}
            svg {
                padding-right 6px;
            }
        }
        
    }
`;