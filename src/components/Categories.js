import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categoriesReducer);
  const handleStatus = () => {
    dispatch(checkStatus(status));
  };
  return (
    <div>
      <button type="button" onClick={handleStatus}>Check status</button>
      <p>{status}</p>
    </div>
  );
};

export default Categories;
