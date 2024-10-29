import { useNavigate, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Errorrr OPPPSSS</h2>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {error.status === 404 && (
        <div>
          <h2>Page not Found</h2>
          <p>Go back in prev page</p>
        </div>
      )}
      <button onClick={() => goBack()} className="bg-red-600 p-2">
        Go back
      </button>
    </div>
  );
}
