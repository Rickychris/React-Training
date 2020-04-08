import React from 'react';

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

const headerBottom = () => (
    <div className={classes.Background}>

        <div className={[classes.HeaderBottom, 'MaxWidth'].join(' ')}>
            <img src={Logo} alt='logo' />
            <ul>
                {headetBottomData.map(data => <li>{data}</li>)}
            </ul>

        </div>
    </div>
);


export default headerBottom;