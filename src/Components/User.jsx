import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

export default function User({ user }) {
  const { userId, id, title, body } = user; // Destructure as an object

  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/user/${id}`);
  };
  return (
    <div className="border-4 border-red-500 p-10 rounded-lg flex flex-col ">
      <h1>User Id: {id}</h1>
      <p className="text-xl flex-grow">Title: {title}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <button onClick={() => handleShowDetails()}>Click to see Button</button>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};
