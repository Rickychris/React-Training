import React from 'react';

import classes from './Main.module.css';
import MainTop from './MainTop/MainTop';
import MainMiddle from './MainMiddle/MainMiddle';
import MainBottom from './MainBottom/MainBottom';


const main = (props) => (
    <section className={classes.Main}>
        <MainTop />
        <MainMiddle />
        <MainBottom />
    </section>
);

export default main;