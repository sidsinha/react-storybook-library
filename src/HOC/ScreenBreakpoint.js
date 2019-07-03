import React, { Component } from 'react';

const ScreenBreakPoint = (WrappedComponent) => {

    return class ScreenBreakPoint extends Component {

        constructor(props){
            super(props);

            this.state = {
                screenWidth: ''
            }
        }
        componentDidMount(){
            window.addEventListener("resize", this.resize.bind(this));
            this.resize();
        }
        resize(){
            this.setState({screenWidth: window.innerWidth});
          }

        render(){
            let large_screen = 980
            let medium_screen= 680;
            let small_screen = 480;
            
            if(this.props.view === 'quickstartguide') {
                large_screen = 1024
                medium_screen = 1024;
                small_screen = 600;
            }
            const hocProps = {};
            let column = this.props.column ? this.props.column : 4;
            switch(column) {
                case 1: 
                    break;
                case 2: 
                    column = this.state.screenWidth < small_screen ? 1 : column;
                    break;
                case 3: 
                    column = this.state.screenWidth < large_screen ? 2 : column;
                    column = this.state.screenWidth < small_screen ? 1 : column;
                    break;
                default:
                    column = this.state.screenWidth < large_screen ? 3 : column;
                    column = this.state.screenWidth < medium_screen ? 2 : column;
                    column = this.state.screenWidth < small_screen ? 1 : column;
                    break;
            }
            hocProps['column'] = column;

            if(!this.props.responsive){
                if(this.state.screenWidth <= small_screen) {
                    hocProps['displayType'] = 'grid';
                }
            }
            return <WrappedComponent {...this.props} {...hocProps}  />
        }
    }
}

export default ScreenBreakPoint;