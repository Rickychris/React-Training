import React from 'react';

import classes from './Main.module.css';
import BalaceCard from '../BalanceCard/BalanceCard';

const cardData = {
    card1: ['Current Balance', '$120,000'],
    card2: ['Available Balance', '$ 30,000', 'View transaction summary'],
};

const main = (props) => (
    <section className={classes.Main}>
        <BalaceCard cardData={cardData.card1} />
        <BalaceCard cardData={cardData.card2} />

    </section>
);

export default main;