import React, { Component } from 'react';

export default function withErrorBoundary(WrappedComponent) {
  return class ErrorBoundary extends Component {
    state = {
      error: null
    };

    static getDerivedStateFromError(error) {
      return { error };
    }

    componentDidCatch(error, info) {
      console.warn(
        `Error:\n\t${error}\nComponent stack:${info.componentStack}`
      );
    }

    render() {
      const { error } = this.state;

      if (error) {
        return (
          <div className="error">
            <h2>Error: {error.message}</h2>
            <p>{error.stack}</p>
          </div>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}
