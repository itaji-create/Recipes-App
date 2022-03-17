import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="foods" element={ <Foods /> } />
      </Routes>
    </Provider>
  );
}

export default App;
