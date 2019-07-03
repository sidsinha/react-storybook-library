import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, text, boolean } from '@storybook/addon-knobs';
import Image from './index';


import RichText from '@hig/rich-text';
import '@hig/rich-text/build/index.css';

import './../../scss/stories.scss';

const stories = storiesOf('Common Use Components', module).addDecorator(withKnobs);

stories.add('Image', () => (
    <div className="storybook">
        <div className="storybook__demo">
            <Image  
                w={text('Frame Width', '200px')}
                h={text('Frame Height', '135px')}
                bgColor={color('Background Color', '#ccc')}
                imagePath={text('Image Path', '')}
                fill={boolean('Fit in ontainer Vertically', false)}
                stretch={boolean('Fit in container Horizontally', false)}
                alt={text('Image Alt Tag', 'test image')}
                placeholderImage={text('Placeholder Image', 'http://www.vitruvianpartners.com/wp-content/uploads/placeholder.png')}
            />
        </div>
        <div className="storybook__info">
            <RichText>
                <h1>Image</h1>
                <p>All you need to do is wrap it in a  component.</p>
                <h2>Basic Usage</h2>
                <pre>
                    <code className="lang-jsx">&lt;Image<br />
                    &nbsp;&nbsp;&nbsp;w="200px"<br />
                    &nbsp;&nbsp;&nbsp;h="135px"<br />
                    &nbsp;&nbsp;&nbsp;bgColor="#ccc"<br />
                    &nbsp;&nbsp;&nbsp;imagePath=""<br />
                    &nbsp;&nbsp;&nbsp;fill="false"<br />
                    &nbsp;&nbsp;&nbsp;stretch="false"<br />
                    &nbsp;&nbsp;&nbsp;alt="placeholder image"<br />
                    &nbsp;&nbsp;&nbsp;placeholderImage="http://www.vitruvianpartners.com/wp-content/uploads/placeholder.png"<br />
                    /&gt;
                    </code>
                </pre>
                <h2>Prop Types</h2>
                <br />
                <h3>"Image" Component</h3>
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
                            <td className="tbody-d1">w</td>
                            <td className="tbody-d1"><span>text</span></td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">200px</td>
                            <td className="tbody-d2">Image width</td>
                        </tr>
                        <tr>
                            <td className="tbody-d1">h</td>
                            <td className="tbody-d1"><span>text</span></td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">135px</td>
                            <td className="tbody-d2">Image height</td>
                        </tr>
                        <tr>
                            <td className="tbody-d1">bgColor</td>
                            <td className="tbody-d1"><span>Hex Code</span></td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">#ccc</td>
                            <td className="tbody-d2">Background color of container</td>
                        </tr>
                        <tr>
                            <td className="tbody-d1">imagePath</td>
                            <td className="tbody-d1"><span>URL</span></td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">Image Path which will be shown</td>
                        </tr>
                        <tr>
                            <td className="tbody-d1">fill</td>
                            <td className="tbody-d1"><span>boolean</span></td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">false</td>
                            <td className="tbody-d2">image will be shown considering Aspect Ratio</td>
                        </tr>
                        <tr>
                            <td className="tbody-d1">stretch</td>
                            <td className="tbody-d1"><span>boolean</span></td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">false</td>
                            <td className="tbody-d2">if image is small it will be streched to fit in container</td>
                        </tr>
                        <tr>
                            <td className="tbody-d1">alt</td>
                            <td className="tbody-d1"><span>text</span></td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">Image Alt tag</td>
                        </tr>
                        <tr>
                            <td className="tbody-d1">placeholderImage</td>
                            <td className="tbody-d1"><span>URL</span></td>
                            <td className="tbody-d2">-</td>
                            <td className="tbody-d2">http://www.vitruvianpartners.com/wp-content/uploads/placeholder.png</td>
                            <td className="tbody-d2">Default placehilder image will be shown, if no image exist</td>
                        </tr>
                    </tbody>
                </table>
                
            </RichText>
        </div>
    </div>
));

