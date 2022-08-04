import ErrorMessage from '../error-message/index';

interface IErrorFallback {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: IErrorFallback) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <ErrorMessage message={error.message} name={error.name} />
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}

export default ErrorFallback;
