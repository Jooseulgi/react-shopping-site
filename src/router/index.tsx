import Header from 'components/Header';
import Carts from 'pages/carts';
import Detail from 'pages/detail';
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
          <Route path="products/" element={<Products />} />
          <Route path="products/:id" element={<Detail />} />
          <Route path="products/new" element={<Upload />} />
          <Route path="carts" element={<Carts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
