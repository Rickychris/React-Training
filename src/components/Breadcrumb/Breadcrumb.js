import React from 'react';


import classes from './Breadcrumb.module.css';

const breadcrumb = (props) => (
    <p className={[classes.Breadcrumb, 'MaxWidth'].join(' ')}>{props.path}</p>
);

export default breadcrumb;