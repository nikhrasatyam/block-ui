import React from 'react';


export default class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error('Error Boundary', error, info);
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return <>Something went wrong. Please report the issue and try after sometime. Sorry for the inconvenience. </>;
    }

    return this.props.children;
  }
}
