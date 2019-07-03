import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import IconProfile from './IconProfile';


import RichText from '@hig/rich-text';
import '@hig/rich-text/build/index.css';

import './../../scss/stories.scss';

const stories = storiesOf('Common Use Components', module).addDecorator(withKnobs);

stories.add('Profile with Icon', () => (
    <div className="storybook">
        <div className="storybook__demo">
            <IconProfile 
                authorName={text('Author Name', 'Siddharth')} 
            />
        </div>
        <div className="storybook__info">
            <RichText>
                <h1>Icon Profile</h1>
                <p>All you need to do is wrap it in a component.</p>
                <h2>Basic Usage</h2>
                <pre>
                    <code className="lang-jsx">&lt;IconProfile<br />
                    &nbsp;&nbsp;&nbsp;authorName="Siddharth"<br />
                    /&gt;
                    </code>
                </pre>
                <h2>Prop Types</h2>
                <br />
                <h3>"Icon Profile" Component</h3>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>propType</th>
                            <th>property</th>
                            <th>required</th>
                            <th>default</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tbody-d1">author</td>
                            <td className="tbody-d1"><span>Text</span></td>
                            <td className="tbody-d2">yes</td>
                            <td className="tbody-d2">Anonymous</td>
                            <td className="tbody-d2">Author Name to be display</td>
                        </tr>
                    </tbody>
                </table>
                
            </RichText>
        </div>
    </div>
));

