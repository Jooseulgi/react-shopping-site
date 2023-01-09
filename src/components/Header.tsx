import { Outlet, useNavigate } from 'react-router-dom';
import { RiShoppingBag3Line } from 'react-icons/ri';
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl m-auto">
      <header className="flex justify-between">
        <h1 className="flex items-center text-lg" onClick={() => navigate('/')}>
          <RiShoppingBag3Line className="mr-2" />
          Shoppy
        </h1>
        <div>
          <button className="text-primary text-lg" type="button">
            Login
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
