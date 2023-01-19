import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ecell from './components/ecell/Ecell';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Event1 from './components/event/Event1';
import Event2 from './components/event/Event2';
import Event3 from './components/event/Event3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes >
      <Route path='/event1' element={<Event1 />} />
      <Route path='/event2' element={<Event2 />} />
      <Route path='/event3' element={<Event3 />} />
      <Route path='/carpediem' element={<App />} />
      <Route path='/*' element={<Ecell />} />
    </Routes>
  </Router>
);
