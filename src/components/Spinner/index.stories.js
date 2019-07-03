import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Spinner from './Spinner';

import RichText from '@hig/rich-text';
// import '@hig/rich-text/build/index.css';

import './../../scss/stories.scss';

const stories = storiesOf('Common Use Components', module).addDecorator(withKnobs);

stories.add('Spinner', () => (
    <div className="storybook">
        <div className="storybook__demo">
            <Spinner 
                size={select('size', ['small', 'medium', 'large']) } 
            />
        </div>
        <div className="storybook__info">
            <RichText>
                <h1>Spinner</h1>
                <p>All you need to do is wrap it in a  component.</p>
                <h2>Basic Usage</h2>
                <pre>
                    <code className="lang-jsx">&lt;Spinner<br />
                    &nbsp;&nbsp;&nbsp;size='small' | 'medium' | 'large'<br />
                    /&gt;
                    </code>
                </pre>
                <h2>Prop Types</h2>
                <br />
                <h3>"Spinner" Component</h3>
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
                            <td className="tbody-d1">size</td>
                            <td className="tbody-d1"><span>text</span></td>
                            <td className="tbody-d2">yes</td>
                            <td className="tbody-d2">small</td>
                            <td className="tbody-d2">Indicates the size of the spinner. 
                                <br />There are only 3 defined size we support. i.e., <strong>small</strong>, <strong>medium</strong> or <strong>large</strong>.</td>
                        </tr>
                    </tbody>
                </table>
                
            </RichText>
        </div>
    </div>
));
    
    