import { Route, Routes } from 'react-router-dom';

import AllMeetUpsPage from './pages/AllMeetUps';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
