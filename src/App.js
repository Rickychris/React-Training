import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import PageHeading from './components/PageHeading/PageHeading';
import PageInfo from './components/PageInfo/PageInfo';
import Main from './components/Main/Main';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Breadcrumb path='Home   >   Account overview' />
      <PageHeading title='Account Overview' />
      <PageInfo data1='The Church Fund - A1050919' data2='Balances as of 12/12/2012' />
      <Main />

    </React.Fragment>
  );
}

export default App;
