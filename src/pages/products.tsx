import { useParams } from 'react-router-dom';

const Products = () => {
  const { id } = useParams();
  return (
    <div>
      Products <span>{id}</span>
    </div>
  );
};

export default Products;