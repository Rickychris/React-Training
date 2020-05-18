import React, { useState } from 'react';
import { connect } from 'react-redux';


import classes from './HeaderBottom.module.css';
import Logo from '../../../assets/images/vcep-logo.png';

const headetBottomData = [
    'ACCOUNT SUMMARY',
    'GRANTS',
    'CONTRIBUTIONS',
    'INVESTMENTS',
    'RESOURCES',
    'MY ACCOUNT',
];


const HeaderBottom = (props) => {
    // window.scrollTo(0, -1000);
    // const [tap, setTap] = useState(false);
    const responsiveNav = () => {
        props.ResponsiveNav();
        // setTap(!tap)
    }
    return (
        <div className={classes.Background}>

            <div className={[classes.HeaderBottom, 'MaxWidth'].join(' ')}>
                <img src={Logo} alt='logo' />
                <ul className={classes.NavUL}>
                    {headetBottomData.map(data => <li key={data}>{data}</li>)}
                </ul>
                <div onClick={props.ResponsiveNav}>
                    <div className={[classes.line1, props.showNav ? classes.rotate1 : null].join(' ')}></div>
                    <div className={[classes.line1, classes.opacity, props.showNav ? classes.opacityToggle : null].join(' ')}></div>
                    <div className={[classes.line3, props.showNav ? classes.rotate3 : null].join(' ')}></div>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        showNav: state.ResponsiveNav,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        ResponsiveNav: () => dispatch({ type: 'ResponsiveNav' }),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBottom);

// import React, { Component } from 'react';

// // import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// // import { Drawer } from 'antd';

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
// class Navbar extends Component {
//     state = {
//         visible: false
//     }
//     showDrawer = () => {
//         console.log('open')
//         this.setState({
//             visible: true,
//         });
//     };
//     onClose = () => {
//         console.log('close')
//         this.setState({
//             visible: false,
//         });
//     };
//     render() {
//         return (
//             <nav>
//                 <div className={classes.Background}>

//                     <div className={[classes.HeaderBottom, 'MaxWidth'].join(' ')}>
//                         <img src={Logo} alt='logo' />
//                         <ul className={classes.NavUL}>
//                             {headetBottomData.map(data => <li key={data}>{data}</li>)}
//                         </ul>
//                         <div onClick={this.showDrawer}>
//                             <div></div>
//                             <div></div>
//                             <div></div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <div className={classes.siteDrawerRenderInCurrentWrapper}>

//                     <Drawer
//                         className={classes.navDrawer}
//                         title="Navigate To"
//                         placement="right"
//                         destroyOnClose
//                         getContainer={false}
//                         style={{ position: 'absolute' }}
//                         // closable={false}
//                         onClose={this.onClose}
//                         visible={this.state.visible}
//                     >
//                         <ul className={classes.NavULRes}>
//                             {headetBottomData.map(data => <li key={data}>{data}</li>)}
//                             <li><p onClick={this.props.drawerHandler}>Need Assistance?</p></li>
//                         </ul>
//                     </Drawer>
//                 </div> */}

//             </nav >
//         );
//     }
// }
// const mapStateToProps = state => {
//     return {
//         // showNav: state.ResponsiveNav,
//     };
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         ResponsiveNav: () => dispatch({ type: 'ResponsiveNav' }),
//     };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);