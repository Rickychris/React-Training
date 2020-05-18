// import React from 'react';

// import classes from './HeaderBottom.module.css';
// import Logo from '../../../assets/images/vcep-logo.png';

// const headetBottomData = [
//     'ACCOUNT SUMMARY',
//     'GRANTS',
//     'CONTRIBUTIONS',
//     'INVESTMENTS',
//     'RESOURCES',
//     'MY ACCOUNT',
// ];

// const headerBottom = () => (
//     <div className={classes.Background}>

//         <div className={[classes.HeaderBottom, 'MaxWidth'].join(' ')}>
//             <img src={Logo} alt='logo' />
//             <ul>
//                 {headetBottomData.map(data => <li key={data}>{data}</li>)}
//             </ul>
//             <div>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//             </div>
//         </div>
//     </div>
// );


// export default headerBottom;

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Drawer } from 'antd';

import classes from './HeaderBottom.module.css';

const headetBottomData = [
    'ACCOUNT SUMMARY',
    'GRANTS',
    'CONTRIBUTIONS',
    'INVESTMENTS',
    'RESOURCES',
    'MY ACCOUNT',
];
class ResponsiveNav extends Component {
    // state = {
    //     visible: false
    // }
    // showDrawer = () => {
    //     console.log('open')
    //     this.setState({
    //         visible: true,
    //     });
    // };
    render() {
        return (

            // <div className={classes.siteDrawerRenderInCurrentWrapper}>

            <Drawer
                className={classes.navDrawer}
                // title="Navigate To"
                mask={false}
                placement="right"
                closable={false}
                destroyOnClose
                getContainer={false}
                style={{ position: 'absolute' }}
                // closable
                // onClose={this.props.ResponsiveNav}
                visible={this.props.visible}
            >
                <ul className={classes.NavULRes}>
                    {headetBottomData.map(data => <li key={data}>{data}</li>)}
                    <li><p onClick={() => { this.props.drawerHandler(); this.props.ResponsiveNav(); }}>Need Assistance?</p></li>
                </ul>
            </Drawer>
            // </div>


        );
    }
}
const mapStateToProps = state => {
    return {
        visible: state.ResponsiveNav,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        drawerHandler: () => dispatch({ type: 'Drawer' }),
        ResponsiveNav: () => dispatch({ type: 'ResponsiveNav' }),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveNav);