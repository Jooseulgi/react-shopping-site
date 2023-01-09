import Header from 'components/Header';
import Carts from 'pages/carts';
import Home from 'pages/home';
import Products from 'pages/products';
import Upload from 'pages/upload';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="" element={<Home />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="carts" element={<Carts />} />
          <Route path="upload" element={<Upload />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
