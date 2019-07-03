import { createGlobalStyle } from 'styled-components';
import * as vars from './variables';

export const GlobalStyle = createGlobalStyle`
.react-loaded-content{
  html {
    font-family: 'ArtifaktElement';
    font-weight: normal;
    font-size: 16px;
    height: 20px;
    color: ${vars.brownishGrey};
  }
  p {
    margin-bottom: 24px;
  }
  hr {
    margin-top: 24px;
    margin-bottom: 24px;
    opacity: 0.3;
  }
  strong {
    color: ${vars.greyishBlack};
    font-weight: 500;
  }
  .caps {
    text-transform: uppercase;
    font-size: 12px;
  }
  a.dotted_link {
    color: ${vars.white};
    text-decoration: none;
    border-bottom: 1px dashed ${vars.white};
    &:hover {
        border-bottom: 1px solid ${vars.white};
    }
  }
}
`;

export default GlobalStyle;
