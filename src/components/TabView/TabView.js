import React from 'react';
import { Tabs, Spin } from 'antd';

import { StyledTable, LoaderDiv } from './TabviewStyle';
import TableData from './TableData';

const { TabPane } = Tabs;


const tabNames = [
    {
        name: "Grants",
        url: 'http://demo1164494.mockable.io/grants',
        count: 0
    },
    {
        name: "Contributions",
        url: 'http://demo1164494.mockable.io/contributions',
        count: 0
    },
    {
        name: "Exchange",
        url: 'http://demo1164494.mockable.io/exchanges',
        count: 0
    },
    {
        name: "Other Transactions",
        url: 'http://demo1164494.mockable.io/other-transactions',
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

                {/* <TabPane key='Grants' tab='Grants'>
                    <TableData />
                </TabPane>
                <TabPane key='Contributions' tab='Contributions'>
                    <TableData />
                </TabPane>
                <TabPane key='Exchange' tab='Exchange'>
                    <TableData />
                </TabPane>
                <TabPane key='Other Transactions' tab='Other Transactions'>
                    <TableData />
                </TabPane> */}

                {/* {
                    this.state.tabData.map(item => (
                        <TabPane key={item.name} tab={item.name}>

                            {!this.state.isLoading ? <StyledTable>
                                <h3>{item.GiftId}</h3>
                                <p>{item.desc}</p>
                                <tr>
                                    <th>Entered date</th>
                                    <th>Received date</th>
                                    <th>Number of shares</th>
                                </tr>
                                <tr>
                                    <td>{item.tableData["Entered date"]}</td>
                                    <td>{item.tableData["Received date"]}</td>
                                    <td>{item.tableData["Number of shares"]}</td>
                                </tr>
                                <tr>

                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>{item.tableData.Type}</td>
                                    <td>{item.tableData.Amount}</td>
                                    <td>{item.tableData.Status}</td>
                                </tr>
                                <hr></hr>
                                <p>{item.linkBtn}</p>
                            </StyledTable> : <LoaderDiv>{this.state.error ? <h1>Error in loading....!!</h1> : <Spin />}</LoaderDiv>}
                        </TabPane>
                    ))
                } */}

            </Tabs>



        );
    }
}

export default TabView;