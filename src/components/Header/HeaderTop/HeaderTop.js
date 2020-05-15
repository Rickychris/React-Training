import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Drawer } from 'antd';


import Select from './select';
import classes from './HeaderTop.module.css';
import MsgIcon from '../../../assets/images/messages.png';
import ContactIcon from '../../../assets/images/profile-1.png';

import NeedAssistance from '../../../pages/need-assistance/need_assistance';


const headerTop = (props) => (
    <div className={classes.Background}>

        <div className={[classes.HeaderTop, 'MaxWidth'].join(' ')}>
            <ul>
                <li> <p onClick={props.drawerHandler}>Need Assistance?</p></li>
                <li><Select /></li>
                <li><img src={MsgIcon} alt='msg-img'></img></li>
                <li> <Link to='/data'><img src={ContactIcon} alt='contact-img'></img></Link></li>
            </ul>
            <Drawer onClose={props.drawerHandler}
                visible={props.drawer} destroyOnClose>
                <NeedAssistance />
            </Drawer>
        </div>
    </div>
);
const mapStateToProps = state => {
    return {
        drawer: state.drawer,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        drawerHandler: () => dispatch({ type: 'Drawer' }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(headerTop);

