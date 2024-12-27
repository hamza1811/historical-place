import { useDispatch } from 'react-redux';
import { toggleVisited } from '../redux/placesSlice';

export function useToggleVisited() {
  const dispatch = useDispatch();
  const toggleHandler = (id: number) => dispatch(toggleVisited(id));

  return {
    toggleHandler,
  };
}
