import React from 'react';

import classes from './MainTop.module.css';
import BalaceCard from '../../BalanceCard/BalanceCard';

const cardData = {
    card1: ['Current Balance', '$120,000'],
    card2: ['Available Balance', '$ 30,000', 'View transaction summary'],
};

const mainTop = () => (
    <div className={[classes.MainTop, 'MaxWidth'].join(' ')}>
        <div>
            <BalaceCard cardData={cardData.card1} />
            <BalaceCard cardData={cardData.card2} />
        </div>
        <div>TabView</div>
    </div>
);

export default mainTop;