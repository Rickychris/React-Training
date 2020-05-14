import React from 'react';

import classes from './MainMiddle.module.css';
import Button from '../../Button/Button';
// import ArrowImg from '../../../assets/images/arrow-white-r.png';


const buttonData = ['Contribution', 'Grant', 'Exchange', 'Manage account'];
const mainMiddle = () => (
    <div className={[classes.MainMiddle, 'MaxWidth'].join(' ')}>

        {buttonData.map((data, id) => <Button key={data} invert={id === 3}> {data}</Button>)}
    </div>
);

export default mainMiddle;