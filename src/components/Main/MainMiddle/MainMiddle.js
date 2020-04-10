import React from 'react';

import classes from './MainMiddle.module.css';
import Button from '../../Button/Button';


const buttonData = ['Contribution', 'Grant', 'Exchange', 'Manage your account'];
const mainMiddle = () => (
    <div className={[classes.MainMiddle, 'MaxWidth'].join(' ')}>

        {buttonData.map((data, id) => <Button invert={id === 3}> {data}</Button>)}
    </div>
);

export default mainMiddle;