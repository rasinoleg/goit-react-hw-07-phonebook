import { useDispatch, useSelector } from 'react-redux';
import { onFilterContacts } from 'redux/contactSlice';
const Filter = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const filterValue = useSelector(state => state.contacts.filter);
  const handleFilterChange = event => {
    const newFilterValue = event.target.value;
    dispatch(onFilterContacts(newFilterValue));
  };
  return (
    <div>
      Find contacts by name
      <input type="text" onChange={handleFilterChange} />
    </div>
  );
};
export default Filter;