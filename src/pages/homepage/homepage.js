import React from 'react';
// import { Route } from 'react-router-dom';



import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import PageHeading from '../../components/PageHeading/PageHeading';
import PageInfo from '../../components/PageInfo/PageInfo';
import Main from '../../components/Main/Main';

// import NeedAssistance from '../need-assistance/need_assistance';
import { NavWrap } from './homeStyle';
// import ManageData from './manageData/manageData';
import ResponsiveNav from '../../components/Header/HeaderBottom/ResponsiveNav'

class Homepage extends React.Component {
    render() {
        return (
            <>
                <NavWrap>
                    <ResponsiveNav />
                    <Breadcrumb path='Home   >   Account overview' />
                    <PageHeading title='Account Overview' />
                    <PageInfo />
                    <Main />
                </NavWrap>
            </>
        );

    }
}

export default Homepage;
