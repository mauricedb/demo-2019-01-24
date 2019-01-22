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
      console.warn('There was an error:', error, info);
    }

    render() {
      const { error } = this.state;

      if (error) {
        return <div>Error: {error.message}</div>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}
