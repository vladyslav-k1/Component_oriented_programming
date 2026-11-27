import { useDispatch, useSelector } from 'react-redux';
import { Button, IconButton } from '../../design-system';
import { favoriteAdded, favoriteRemoved, selectIsFavorite } from '../../store/slices/favoritesSlice';

function FavoriteButton({ event, showLabel = false }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => selectIsFavorite(state, event.id));

  const label = isFavorite ? 'Прибрати з обраного' : 'Додати в обране';
  const icon = isFavorite ? '★' : '☆';

  const handleClick = (clickEvent) => {
    clickEvent.stopPropagation();
    dispatch(isFavorite ? favoriteRemoved(event.id) : favoriteAdded(event));
  };

  if (showLabel) {
    return (
      <Button variant="secondary" startIcon={icon} aria-pressed={isFavorite} onClick={handleClick}>
        {label}
      </Button>
    );
  }

  return (
    <IconButton
      icon={icon}
      label={label}
      size="sm"
      pressed={isFavorite}
      activeTone="warning"
      onClick={handleClick}
    />
  );
}

export default FavoriteButton;
