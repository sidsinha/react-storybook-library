import React from 'react';

const translatedTextContext = React.createContext({
    textProductsCovered: 'Products and versions covered',
    textShare: 'Share',
    textReport: 'Report',
    textCancel: 'Cancel',
    textAddToCollection: 'Add to Collection',
    textReportArticle: 'Report this Article',
    textReportCollection: 'Report this Collection',
    textReportingReason: 'Reason for Reporting (optional)'
});

export default translatedTextContext;