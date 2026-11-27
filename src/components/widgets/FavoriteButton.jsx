import { useDispatch, useSelector } from 'react-redux';
import StarButton from '../ui/StarButton';
import {
  favoriteAdded,
  favoriteRemoved,
  selectIsFavorite,
} from '../../store/slices/favoritesSlice';

function FavoriteButton({ event, showLabel = false }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => selectIsFavorite(state, event.id));

  const handleClick = (clickEvent) => {
    clickEvent.stopPropagation();
    dispatch(isFavorite ? favoriteRemoved(event.id) : favoriteAdded(event));
  };

  return (
    <StarButton
      isActive={isFavorite}
      label={isFavorite ? 'Прибрати з обраного' : 'Додати в обране'}
      onClick={handleClick}
      showLabel={showLabel}
    />
  );
}

export default FavoriteButton;
