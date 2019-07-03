import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import ActionMenu from './ActionMenu';


import RichText from '@hig/rich-text';
import '@hig/rich-text/build/index.css';

import './../../scss/stories.scss';

const stories = storiesOf('Common Use Components', module).addDecorator(withKnobs);

stories.add('Action Menu', () => (
    <div className="storybook">
        <div className="storybook__demo">
            <ActionMenu 
                type={select('type', ['verticalDots', 'horizontalDisplay']) } 
            />
        </div>
        <div className="storybook__info">
            <RichText>
                <h1>Action Menu</h1>
                <p>All you need to do is wrap it in a  component.</p>
                <h2>Basic Usage</h2>
                <pre>
                    <code className="lang-jsx">&lt;ActionMenu<br />
                    &nbsp;&nbsp;&nbsp;activeColor="#0696d7"<br />
                    /&gt;
                    </code>
                </pre>
                <h2>Prop Types</h2>
                <br />
                <h3>"Action Menu" Component</h3>
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
                            <td className="tbody-d1">activeColor</td>
                            <td className="tbody-d1"><span>Hex Code</span></td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">#0696d7</td>
                            <td className="tbody-d2">Active button background color</td>
                        </tr>
                    </tbody>
                </table>
                
            </RichText>
        </div>
    </div>
));

