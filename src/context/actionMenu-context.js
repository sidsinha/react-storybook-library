import React from 'react';

const actionMenuContext = React.createContext({
    nodeId: '',
    reportTitle: '',
    reportWithText: false,
    shareUrl: '',
    handleAnalytics: () => {},
    closeAllModel: () => {}
});

export default actionMenuContext;