import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { ROUTES } from '../../routes';
import { formatDateTime } from '../../utils/earthquakeUtils';
import {
  favoriteRemoved,
  favoritesCleared,
  selectAllFavorites,
} from '../../store/slices/favoritesSlice';

function FavoritesWidget() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectAllFavorites);

  if (favorites.length === 0) {
    return <p className="placeholder">Позначте подію зірочкою ☆ у таблиці, щоб додати її сюди.</p>;
  }

  return (
    <div className="favorites">
      <ul className="favorites__list">
        {favorites.map((favorite) => (
          <li key={favorite.id} className="favorites__item">
            <Link to={ROUTES.earthquake(favorite.id)} className="favorites__link">
              <strong>M {favorite.mag?.toFixed(1) ?? '—'}</strong> {favorite.place ?? '—'}
              <span className="favorites__time">{formatDateTime(favorite.time)}</span>
            </Link>
            <button
              type="button"
              className="favorites__remove"
              aria-label="Прибрати з обраного"
              onClick={() => dispatch(favoriteRemoved(favorite.id))}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="button--secondary" onClick={() => dispatch(favoritesCleared())}>
        Очистити обране
      </button>
    </div>
  );
}

export default FavoritesWidget;
