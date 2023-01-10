import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import auth from '../util/firebase';
import { RiShoppingBag3Line } from 'react-icons/ri';

const Header = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<User | null>(null);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data: any) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleGoogleLogout = () => {
    signOut(auth).then(() => null);
    console.log(1);
  };
  return (
    <div className="max-w-7xl m-auto">
      <header className="flex justify-between">
        <h1 className="flex items-center text-lg" onClick={() => navigate('/')}>
          <RiShoppingBag3Line className="mr-2" />
          Shoppy
        </h1>
        <nav>
          <ul>
            <li onClick={() => navigate('/products')}>Products</li>
            <li onClick={() => navigate('/carts')}>Carts</li>
            <li onClick={() => navigate('/products/new')}>pencil</li>
            <li>
              {userData ? (
                <div>
                  <span
                    style={{ backgroundImage: `url(${userData.photoURL})` }}
                  ></span>
                  <span>{userData.displayName}</span>
                  <span onClick={handleGoogleLogout}>Logout</span>
                </div>
              ) : (
                <span onClick={handleGoogleLogin}>Login</span>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
