import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import CollectionListing from './CollectionListing';

const stories = storiesOf('AKN Components', module).addDecorator(withKnobs);

const cardData = require("../../data/SampleData.json");

stories.add('CollectionListing', () => (
    <div className="storybook">
        <div className="storybook__demo">
            <CollectionListing 
                items={cardData.entries.item} 
                displayIndex={true}
                authorName="Siddharth"
                authorAvatar=""
                authorUrl=""
                pageUrl="https://knowledge.autodesk.com/"
                nodeId="219831"
                productInfo="Revit Products, ReCap, Revit Live, & VRED Products"
                heading="Building–Collaboration–From brownfield to digital factory with BIM, Part 2 (Reuse 2D for BIM model)"
                description="The factory of the future has a twin. In the real environment, the factory stays closely matched with its integrated digital model. BIM plays an important part in the building of the digital factory, and the integration into the digital factory’s operation. Several articles will show how to build the digital factory building with BIM using legacy data, and how that data is further used for integrating MEP, extracting quantities, visualization, and even in the operation of the digital factory."
                siteEnv="whdev"
                view="collection"
                textProductsCovered="Products and versions covered"
                textShare="Share"
                textReport="Report"
                textCancel="Cancel"
                textAddToCollection="Add to Collection"
                textReportArticle="Report this Article"
                textReportCollection="Report this Collection"
                textReportingReason="Reason for Reporting (optional)"
             />
        </div>
    </div>
));