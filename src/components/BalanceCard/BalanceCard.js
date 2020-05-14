import React from 'react';

import classes from './BalanceCard.module.css';

const balanceCard = (props) => {

    const cardData = [
        ...props.cardData
    ];

    return (
        <div className={[classes.BalanceCard]}>
            {cardData.map(data => <p key={data}>{data}</p>)}

        </div>
    );

};

export default balanceCard;