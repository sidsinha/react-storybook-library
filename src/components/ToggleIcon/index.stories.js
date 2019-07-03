import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color } from '@storybook/addon-knobs';
import ToggleIcon from './ToggleIcon';


import RichText from '@hig/rich-text';
import '@hig/rich-text/build/index.css';

import './../../scss/stories.scss';

const stories = storiesOf('Common Use Components', module).addDecorator(withKnobs);

stories.add('ToggleIcon', () => (
    <div className="storybook">
        <div className="storybook__demo">
            <ToggleIcon
                activeColor={color('activeColor', '#0696d7')}
            />
        </div>
        <div className="storybook__info">
            <RichText>
                <h1>ToggleIcon</h1>
                <p>All you need to do is wrap it in a  component.</p>
                <h2>Basic Usage</h2>
                <pre>
                    <code className="lang-jsx">&lt;Image<br />
                    &nbsp;&nbsp;&nbsp;activeColor="#0696d7"<br />
                    /&gt;
                    </code>
                </pre>
                <h2>Prop Types</h2>
                <br />
                <h3>"ToggleIcon" Component</h3>
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

