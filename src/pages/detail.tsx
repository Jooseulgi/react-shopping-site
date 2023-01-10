import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  return (
    <div>
      Products <span>{id}</span>
    </div>
  );
};

export default Detail;
