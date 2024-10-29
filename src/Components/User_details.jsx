import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';

export default function User_details() {
  const user = useLoaderData();
  const navigate = useNavigate();
  const { userId, id, title, body } = user;
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>User Id :{id} </h1>
      <p>{body}</p>
      <button onClick={() => handleGoBack()} className="bg-red-600 p-4">
        Go Back
      </button>
    </div>
  );
}
