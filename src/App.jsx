import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Provider from './context/Provider';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import RecipeMealDetails from './pages/RecipeMealDetails';

function App() {
  const numbers = useLocation().pathname
    .split('').filter((e) => (Number(e) || e === '0')).join('');
  return (
    <Provider>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="foods" element={ <Foods /> } />
        <Route path="drinks" element={ <Drinks /> } />
        <Route path="profile" element={ <Profile /> } />
        <Route path={ `/foods/${numbers}` } element={ <RecipeMealDetails /> } />
      </Routes>
    </Provider>
  );
}

export default App;
