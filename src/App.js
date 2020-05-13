import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css';
import './App.css';
import Homepage from './pages/homepage';
import NeedAssistance from './pages/need-assistance/need_assistance';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Homepage} />
      <Route path='/need-assistance' component={NeedAssistance} />

    </BrowserRouter>
  );
}

export default App;
