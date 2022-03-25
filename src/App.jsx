import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Provider from './context/Provider';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import RecipeMealDetails from './pages/RecipeMealDetails';
import RecipeDrinkDetails from './pages/RecipeDrinkDetails';

function App() {
  const { pathname } = useLocation();
  let idNumbers = pathname
  .split('').filter((e) => (Number(e) || e === '0')).join('');
  if (!idNumbers) idNumbers = 52977;
  return (
    <Provider>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/foods" element={ <Foods /> } />
        <Route exact path="/drinks" element={ <Drinks /> } />
        <Route exact path="/profile" element={ <Profile /> } />
        <Route exact path={ `foods/${idNumbers}` } element={ <RecipeMealDetails /> } />
        <Route exact path={ `drinks/${idNumbers}` } element={ <RecipeDrinkDetails /> } />
      </Routes>
    </Provider>
  );
}

export default App;
