import { Component, useCallback, useState } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { PageError } from "@/widgets/PageError";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryBridgeProps = ErrorBoundaryProps & {
  onError: (error: Error, info: ErrorInfo) => void;
};

class ErrorBoundaryBridge extends Component<ErrorBoundaryBridgeProps> {
  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError(error, info);
  }

  render() {
    return this.props.children;
  }
}

export const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback((error: Error, info: ErrorInfo) => {
    console.error(error, info);
    setHasError(true);
  }, []);

  if (hasError) {
    return <PageError />;
  }

  return (
    <ErrorBoundaryBridge onError={handleError}>{children}</ErrorBoundaryBridge>
  );
};
