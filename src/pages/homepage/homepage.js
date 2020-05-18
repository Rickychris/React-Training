import React from 'react';
// import { Route } from 'react-router-dom';



import Header from '../../components/Header/Header';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import PageHeading from '../../components/PageHeading/PageHeading';
import PageInfo from '../../components/PageInfo/PageInfo';
import Main from '../../components/Main/Main';

// import NeedAssistance from '../need-assistance/need_assistance';
import { NavWrap } from './homeStyle';
// import ManageData from './manageData/manageData';
import ResponsiveNav from '../../components/Header/HeaderBottom/HeaderResponsive'

class Homepage extends React.Component {
    render() {
        return (
            <>
                {/* <button onClick={this.props.drawerHandler}>click</button> */}
                {/* <Route path='/need-assistance' component={NeedAssistance} /> */}
                <Header />
                <NavWrap>
                    <ResponsiveNav />
                    <Breadcrumb path='Home   >   Account overview' />
                    <PageHeading title='Account Overview' />
                    <PageInfo />
                    <Main />
                </NavWrap>
                {/* <Drawer onClose={this.props.drawerHandler}
                    visible={this.props.drawer}>
                    <NeedAssistance />
                </Drawer> */}
            </>


        );

    }
}

export default Homepage;
