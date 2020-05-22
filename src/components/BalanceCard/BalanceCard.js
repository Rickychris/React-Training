import React from 'react';
import { Spin } from 'antd';

import classes from './BalanceCard.module.css';

const balanceCard = (props) => {

    const cardData = [
        props.name,
        props.balance,
    ];
    // console.log(props.error)
    return (
        <div className={[classes.BalanceCard]}>
            {!props.loading ?
                <>
                    {cardData.map(data => <p key={data}>{data}</p>)}
                    {props.trxSummary ? <p>View transaction summary</p> : null}
                </>

                : <div>{props.error ? <h1>Error in Loading....!!</h1> : <Spin />}</div>
            }
        </div>
    );

};

export default balanceCard;