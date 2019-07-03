import React, { useContext } from 'react';

/* Context */
import ActionMenuContext from './../../context/actionMenu-context';
/* Context */
import TanslatedTextContext from './../../context/traslatedText-context';
/* Styles */
import * as Styles from '../Styled/styles';

const Report = () => {
    const actionMenuContext = useContext(ActionMenuContext);
    const tanslatedTextContext = useContext(TanslatedTextContext);

    const { nodeId, reportTitle, reportWithText, handleAnalytics, closeAllModel } = actionMenuContext;
    const { textReportingReason, textCancel, textReport } = tanslatedTextContext;

    const handleClick = (action) => {
        closeAllModel();
        handleAnalytics(action);
    }
    return(
        <Styles.StyledReportItem>
            {
                reportTitle ? <div className="report-title">{`${reportTitle} ?`}</div> : ''
            }
            {
                reportWithText ? <textarea className="flag-comments" placeholder={textReportingReason}></textarea> : ''
            }
            <Styles.StyledButton 
                onClick={() => handleClick('cancel')}
                id="flag-cancel"
            >
                { textCancel }
            </Styles.StyledButton>

            {
                nodeId ?
                    <Styles.StyledButton 
                        onClick={() => handleClick('report')} 
                        id="flag-report"
                        data-source="collection"
                        data-id={nodeId}
                        primary>
                        { textReport }
                    </Styles.StyledButton>
                :
                    <Styles.StyledButton 
                        onClick={() => handleClick('report')} 
                        className="report-collection-item" 
                        primary>
                        { textReport }
                    </Styles.StyledButton>
            }
        </Styles.StyledReportItem>
    )
}

export default Report;