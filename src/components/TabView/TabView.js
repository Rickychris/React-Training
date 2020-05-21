import React from 'react';
import { Tabs, Spin } from 'antd';

import { StyledTable, LoaderDiv } from './TabviewStyle';

const { TabPane } = Tabs;


const tabData = [
    {
        "name": "Grants",
    },
    {
        "name": "Contributions",
    },
    {
        "name": "Exchange",
    },
    {
        "name": "Other Transactions",
    }
];


class TabView extends React.Component {
    state = {
        isLoading: true,
        error: false,
        tabData: tabData
    }
    async componentDidMount() {

        // fetch('https://demo1164494.mockable.io/grants')
        //     .then(res => res.json())
        //     .then(res => this.successHandler(res))
        //     .catch(error => this.errorHandler(error))

        try {
            const url = 'https://demo1164494.mockable.io/grants';
            const response = await fetch(url)
            const data = await response.json();
            this.successHandler(data);
        } catch (error) {
            this.errorHandler(error)
        }
    }

    successHandler = (response) =>
        this.setState({
            isLoading: false,
            tabData: response.data

        });
    errorHandler = (error) => {
        console.log(error);
        this.setState({
            error: true
        })
    }
    render() {
        return (
            <Tabs type='card' >
                {
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
                }

            </Tabs>



        );
    }
}

export default TabView;