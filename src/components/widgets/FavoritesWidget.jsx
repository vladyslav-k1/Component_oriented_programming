import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { Button, IconButton, List, ListItem, Stack, Text } from '../../design-system';
import { ROUTES } from '../../routes';
import { formatDateTime } from '../../utils/earthquakeUtils';
import { favoriteRemoved, favoritesCleared, selectAllFavorites } from '../../store/slices/favoritesSlice';

function FavoritesWidget() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectAllFavorites);

  if (favorites.length === 0) {
    return <Text tone="muted">Позначте подію зірочкою ☆ у таблиці, щоб додати її сюди.</Text>;
  }

  return (
    <Stack gap="3">
      <List maxHeight="md">
        {favorites.map((favorite) => (
          <ListItem
            key={favorite.id}
            as={Link}
            to={ROUTES.earthquake(favorite.id)}
            title={`M ${favorite.mag?.toFixed(1) ?? '—'}`}
            description={favorite.place ?? '—'}
            meta={formatDateTime(favorite.time)}
            trailing={
              <IconButton
                icon="✕"
                label="Прибрати з обраного"
                size="sm"
                onClick={() => dispatch(favoriteRemoved(favorite.id))}
              />
            }
          />
        ))}
      </List>
      <Stack align="start">
        <Button variant="secondary" size="sm" onClick={() => dispatch(favoritesCleared())}>
          Очистити обране
        </Button>
      </Stack>
    </Stack>
  );
}

export default FavoritesWidget;
