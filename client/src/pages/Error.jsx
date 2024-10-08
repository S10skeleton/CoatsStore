import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Error</h1>
      <p>Page error or URL not found</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}