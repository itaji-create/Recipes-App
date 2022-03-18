import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Provider from './context/Provider';
import Drinks from './pages/Drinks';

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="foods" element={ <Foods /> } />
        <Route path="drinks" element={ <Drinks /> } />
      </Routes>
    </Provider>
  );
}

export default App;
