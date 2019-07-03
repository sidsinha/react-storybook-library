import React from 'react';

var createReactClass = require('create-react-class');

const VerticalDotsIcon = createReactClass({
    render() {
        var color = this.props.color ? this.props.color : '#000';
        var SVGstyle = {
            fill: color
        }
        return (
            <svg className="vertical-dots" id="assets" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g style={SVGstyle}>
                    <circle className="vertical-dots" cx="7.5" cy="14.5" r="1.5"/>
                    <circle className="vertical-dots" cx="7.5" cy="8.5" r="1.5"/>
                    <circle className="vertical-dots" cx="7.5" cy="2.5" r="1.5"/>
                </g>
            </svg>
        )
    }
});

const LeftCaret = createReactClass({
    render() {
        return (
            <svg className="caret-left" id="assets" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <polygon className="caret-left" points="3.65 8.09 9.95 1.79 11.72 3.56 7.18 8.09 11.72 12.63 9.95 14.4 3.65 8.09"/>
            </svg>
        )
    }
});

const RightCaret = createReactClass({
    render() {
        return (
            <svg className="caret-right"  id="assets" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <polygon className="caret-right" points="4.28 12.63 8.82 8.09 4.28 3.56 6.05 1.79 12.35 8.09 6.05 14.4 4.28 12.63"/>
            </svg>
        )
    }
});

const ShareIcon = createReactClass({
    render() {
        let { size, color } = this.props;
        size = size ? size : '16';
        color = color ? color : '#000';

        const SVGstyle = {
            fill: color
        }

        return (
            <svg id="assets" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
                <path style={SVGstyle} d="M12.5,11a2.73,2.73,0,0,0-1.9.8L5.94,9A2.33,2.33,0,0,0,6,8.5a2.5,2.5,0,0,0-.18-.91L11,4.5A2.53,2.53,0,0,0,14.5,4,2.53,2.53,0,0,0,14,.5a2.53,2.53,0,0,0-3.5.5A2.46,2.46,0,0,0,10,2.5a2.92,2.92,0,0,0,.2.9L5,6.5l0,0A2.46,2.46,0,0,0,3.5,6a2.5,2.5,0,1,0,1.82,4.21L10,13c0,.2-.1.3-.1.5a2.5,2.5,0,0,0,5,0A2.39,2.39,0,0,0,12.5,11Z"/>
            </svg>
        )
    }
});

const FlagIcon = createReactClass({
    render() {
        let { size, color } = this.props;
        size = size ? size : '16';
        color = color ? color : '#000';

        const SVGstyle = {
            fill: color
        }
        return (
            <svg id="assets" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
                <g style={SVGstyle}>
                    <path d="M12.13,2.3A7.07,7.07,0,0,1,9.08,3a7.07,7.07,0,0,1-3-.67s0,0,0,0A3.52,3.52,0,0,0,4.54,2a3.49,3.49,0,0,0-2.39.95l4,6A3.49,3.49,0,0,1,8.57,8a3.54,3.54,0,0,1,1.52.34l.09,0A7,7,0,0,0,13.11,9,7.07,7.07,0,0,0,16,8.38Z"/>
                    <path d="M.88,2.85,0,3.4,7.82,14.95l.06.1L8,15l.74-.49Z"/>
                </g>
            </svg>
        )
    }
});

const AddIcon = createReactClass({
    render() {
        let { size } = this.props;
        size = size ? size : '16';
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
                <g id="assets">
                    <g id="Layer_201" data-name="Layer%201">
                    <path d="M6,1V6H1V9H6v5H9V9h5V6H9V1Z"/>
                    </g>
                </g>
            </svg>
        )
    }
});

const CaretDownIcon = createReactClass({
    render(){
        return(
            <svg width="10px" height="10px" viewBox="0 0 10 10">
                <g id="hig-icons/common/caret/down/standard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M5,5.94 L2,3 C1.71319355,2.86302346 1.37119148,2.92170174 1.14644661,3.14644661 C0.921701738,3.37119148 0.86302346,3.71319355 1,4 L4.5,7.5 C4.79281755,7.79245338 5.26718245,7.79245338 5.56,7.5 L9,4 C9.13697654,3.71319355 9.07829826,3.37119148 8.85355339,3.14644661 C8.62880852,2.92170174 8.28680645,2.86302346 8,3 L5,5.94 Z" id="down" fill="#485366" fill-rule="nonzero"></path>
                </g>
            </svg>
        )
    }
});

const CaretUpIcon = createReactClass({
    render(){
        return(
            <svg width="10px" height="10px" viewBox="0 0 10 10">
                <g id="hig-icons/common/caret/up/standard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M5,4.06 L8,7 C8.28680645,7.13697654 8.62880852,7.07829826 8.85355339,6.85355339 C9.07829826,6.62880852 9.13697654,6.28680645 9,6 L5.5,2.5 C5.20718245,2.20754662 4.73281755,2.20754662 4.44,2.5 L1,6 C0.86302346,6.28680645 0.921701738,6.62880852 1.14644661,6.85355339 C1.37119148,7.07829826 1.71319355,7.13697654 2,7 L5,4.06 Z" id="up" fill="#485366" fill-rule="nonzero"></path>
                </g>
            </svg>
        )
    }
});

const CtaArrowRight = createReactClass({
    render(){
        let { size, color } = this.props;
        size = size ? size : '24';
        return(
            <svg fill={color} x="0px" y="0px" width={`${size}px`} height={`${size}px`} viewBox="5361 2504 16 16" enable-background="new 5361 2504 16 16">
            <path d="M5369,2504c-3.779,0-8,2.967-8,7.579c0,5.474,4.223,8.421,8,8.421c3.779,0,8-3.055,8-8.421
                C5377,2507.223,5372.779,2504,5369,2504z M5370,2516l-1.5-1.5l1.5-1.5h-6v-2h6l-1.5-1.5l1.5-1.5l4,3.949L5370,2516z"/>
            </svg>
        )
    }
});

export { VerticalDotsIcon, LeftCaret, RightCaret, ShareIcon, FlagIcon, AddIcon, CaretDownIcon, CaretUpIcon, CtaArrowRight};