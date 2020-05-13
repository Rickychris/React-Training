import React from 'react';
import { Link } from 'react-router-dom';


import classes from './HeaderTop.module.css';
import MsgIcon from '../../../assets/images/messages.png';
import ContactIcon from '../../../assets/images/profile-1.png';


const headerTop = () => (
    <div className={classes.Background}>

        <div className={[classes.HeaderTop, 'MaxWidth'].join(' ')}>
            <ul>
                <li> <Link to='/need-assistance'><p>Need Assistance?</p></Link></li>
                <li><select>
                    <option>123</option>
                    <option>12144</option>
                    <option>141532</option>
                </select></li>
                <li><img src={MsgIcon} alt='msg-img'></img></li>
                <li><img src={ContactIcon} alt='contact-img'></img></li>
            </ul>
        </div>
    </div>
);

export default headerTop;