import React, { useRef, useContext, Fragment } from 'react';

/* Context */
import ActionMenuContext from './../../context/actionMenu-context';
/* Styles */
import * as vars from './../Styled/variables';
import * as Styles from './../Styled/styles';
import { StyleFlyout } from './../Styled/Flyout';

const FlyoutModel = props => {
    const actionMenuContext = useContext(ActionMenuContext);

    const { closeAll } = props;

    const modelElRef = useRef();

    const children = props.children;
    const clickElement = children[0];
    const flyoutContent = children[1];

    const openModel = () => {
        const currentEl = modelElRef.current;

        if(closeAll) {
            actionMenuContext.closeAllModel();
        }
        currentEl.classList.toggle('open');
    }

    return(
        <Fragment>
            <Styles.GlobalStyle />
            <StyleFlyout />
            <div className={`${vars.prefix}_flyout`}>
                <div className="flyout-container">
                    <a href="javascript:void(0);" onClick={openModel}>
                        <div className="click-item">{ clickElement }</div>
                    </a>
                    <div className="flyout-content" ref={modelElRef}>
                        <div className="menu-triangle"></div>
                        <div className="flyout-content-inner">
                            { flyoutContent }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FlyoutModel;