import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Event1 from './components/event/Event1';
import Event2 from './components/event/Event2';
import Event3 from './components/event/Event3';

function App() {
  return (
    <Routes >
      <Route path='event1' element={<Event1 />} />
      <Route path='event2' element={<Event2 />} />
      <Route path='event3' element={<Event3 />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  );
}

export default App;
