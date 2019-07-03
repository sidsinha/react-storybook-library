import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import QuickStartGuideListing from './QuickStartGuideListing';

const stories = storiesOf('AKN Components', module);
stories.addDecorator(withKnobs);
const cardData = require("./../../data/SampleData.json");

stories.add('Quickstart Guide List', () => (
        <QuickStartGuideListing 
            totalItems={9}
            description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
            items={cardData.entries.item} 
            pageUrl=''
            siteEnv="whdev"
        />
    )
);