import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


// import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './reset.css';
import './App.css';
import Homepage from './pages/homepage/homepage';
// import NeedAssistance from './pages/need-assistance/need_assistance';
import ManageData from './pages/manageData/manageData';
import Header from './components/Header/Header';

function App(props) {
  useEffect(() => { props.getData() }, [props]);
  return (

    <BrowserRouter >
      <Header />
      <Switch>
        <Route path='/data' exact component={ManageData} />
        <Route path='/' component={Homepage} />
      </Switch>
    </BrowserRouter>


  );
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch({ type: 'Get-Data' }),
  };
}
export default connect(null, mapDispatchToProps)(App);


