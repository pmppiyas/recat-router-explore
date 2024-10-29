import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Home() {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div className="border-4 border-black">
      <Navbar></Navbar>
      <h1 className="text-3xl text-center font-semibold ">Home Page</h1>
      {navigation.state == 'loading' ? (
        <div className="flex justify-center items-center">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
    </div>
  );
}
