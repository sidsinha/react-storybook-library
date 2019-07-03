import React, { Component } from 'react';

const DateFormatter = (WrappedComponent) => {

    return class DateFormatter extends Component {

        formatDate(){
            var publishDate = this.props.item.publishDate.toString().replace(/\s/, 'T');
            var d = new Date(publishDate);
            const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            var formatDate = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
            return formatDate;
        }

        render(){
            this.props.item.publishDate = this.formatDate();
            return <WrappedComponent {...this.props}  />
        }
    }
}

export default DateFormatter;