import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = () => {
  const favoritesCtxObj = useContext(FavoritesContext);

  let content;

  if (favoritesCtxObj.totalFavorites === 0) {
    content = <p>You have no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtxObj.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
