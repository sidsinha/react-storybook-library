import log from 'loglevel';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/**
 * Log errors
 *
 * @param { string } error message
 * @param { string } info message
 *
 * @returns { object } error message
 */
const sendToErrorReporting = (error, info) => {
  log.error(error);
  log.error(info);
};

class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState((state) => ({
      ...state,
      hasError: true,
    }));
    sendToErrorReporting(error, info);
  }

  render() {
    let text = this.props.text ? this.props.text : 'There is some error. Please try again later.';

    if (this.state.hasError) {
      return (
          <Fragment>  
            {text}
          </Fragment>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.object,
};