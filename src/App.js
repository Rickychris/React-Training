import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './store/reducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './reset.css';
import './App.css';
import Homepage from './pages/homepage/homepage';
// import NeedAssistance from './pages/need-assistance/need_assistance';
import ManageData from './pages/manageData/manageData';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Switch>
          <Route path='/data' exact component={ManageData} />
          <Route path='/' component={Homepage} />
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
