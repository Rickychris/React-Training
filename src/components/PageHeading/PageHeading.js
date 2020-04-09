import React from 'react';

import classes from './PageHeading.module.css';
const pageHeading = (props) => (
    <h1 className={[classes.PageHeading, 'MaxWidth'].join(' ')}>{props.title}</h1>
);

export default pageHeading;