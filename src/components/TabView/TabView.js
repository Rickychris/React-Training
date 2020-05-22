import React from 'react';
import { Tabs } from 'antd';

import TableData from './TableData';

const { TabPane } = Tabs;


const tabNames = [
    {
        name: "Grants",
        url: 'https://demo1164494.mockable.io/grants',
        count: 0
    },
    {
        name: "Contributions",
        url: 'https://demo1164494.mockable.io/contributions',
        count: 0
    },
    {
        name: "Exchange",
        url: 'https://demo1164494.mockable.io/exchanges',
        count: 0
    },
    {
        name: "Other Transactions",
        url: 'https://demo1164494.mockable.io/other-transactions',
        count: 0
    }
];


class TabView extends React.Component {
    state = {
        tabNames: tabNames,
    }
    updateNumbers = (title, number) => {
        this.setState((prevState) => {
            switch (title) {
                case 'Grants':
                    let newGrants = [...prevState.tabNames];
                    newGrants[0].count = number;
                    return {
                        tabNames: newGrants
                    }
                case 'Contributions':
                    let newCont = [...prevState.tabNames];
                    newCont[1].count = number;
                    return {
                        Contributions: newCont
                    }
                case 'Exchange':
                    let newExch = [...prevState.tabNames];
                    newExch[2].count = number;
                    return {
                        Exchange: newExch
                    }
                case 'Other Transactions':
                    let newOth = [...prevState.tabNames];
                    newOth[3].count = number;
                    return {
                        OtherTransactions: newOth
                    }
                default:
                    return {
                        prevState
                    }
            }
        })
    }
    render() {
        return (
            <Tabs type='card' >
                {this.state.tabNames.map(item => (

                    <TabPane key={item.name} tab={`${item.name} (${item.count})`}>
                        <TableData url={item.url} updateNum={this.updateNumbers} />
                    </TabPane>
                ))}
            </Tabs>



        );
    }
}

export default TabView;