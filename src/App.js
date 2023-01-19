import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <Routes >
      
      <Route path='/home' element={<Home />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  );
}

export default App;
