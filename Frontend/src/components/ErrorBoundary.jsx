import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-900 text-white rounded">
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message || "Please try refreshing the page."}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;