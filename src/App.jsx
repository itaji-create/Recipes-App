import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Foods from './pages/Foods';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="foods" element={ <Foods /> } />
    </Routes>
  );
}

export default App;
