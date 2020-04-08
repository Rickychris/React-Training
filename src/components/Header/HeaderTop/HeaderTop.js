import React from 'react';

import classes from './HeaderTop.module.css';
import MsgIcon from '../../../assets/images/messages.png';
import ContactIcon from '../../../assets/images/profile-1.png';

const headerTopData = [
    <p>Need Assistance?</p>,
    <select>
        <option>123</option>
        <option>12144</option>
        <option>141532</option>
    </select>,
    <img src={MsgIcon} alt='msg-img'></img>,
    <img src={ContactIcon} alt='contact-img'></img>,
];

const headerTop = () => (
    <div className={classes.Background}>

        <div className={[classes.HeaderTop, 'MaxWidth'].join(' ')}>
            <ul>
                {headerTopData.map(data => <li>{data}</li>)}
            </ul>
        </div>
    </div>
);

export default headerTop;