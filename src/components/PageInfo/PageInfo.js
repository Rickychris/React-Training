import React from 'react';

import classes from './PageInfo.module.css';

const pageInfo = (props) => (
    <section className={[classes.PageInfo, 'MaxWidth'].join(' ')}>

        <p>{props.data1}</p>
        <p>{props.data2}</p>
    </section>
);

export default pageInfo;