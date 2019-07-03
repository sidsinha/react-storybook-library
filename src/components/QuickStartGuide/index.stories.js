import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import QuickStartGuide from './QuickStartGuide';

const stories = storiesOf('AKN Components', module);
stories.addDecorator(withKnobs);
// stories.addDecorator(withReadme([README]));

// stories.add('Quick Start Guide', () => React.createElement(() => {
//     return (
//         <div className="storybook">
//             <div className="storybook__demo">
//                 <QuickStartGuide />
//             </div>
//         </div>
//     );
// }));
stories.add('Quickstart Guide', () => (
        <QuickStartGuide
            totalItems={9}
            description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
            pageUrl='https://knowledge-staging.autodesk.com/'
            siteEnv="whdev"
        />
    )
);