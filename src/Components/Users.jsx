import { useLoaderData } from 'react-router-dom';
import User from './user';

export default function Users() {
  const users = useLoaderData();

  return (
    <div className="border-t-2 mt-4">
      <h1 className="text-3xl font-semibold py-4">
        Users Length ({users.length}){' '}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {users && users.length > 0
          ? users.map((user, indx) => <User key={indx} user={user}></User>)
          : 'Loading'}
      </div>
    </div>
  );
}
