import React from 'react';
import { Tabs } from 'antd';

import 'react-tabs/style/react-tabs.css';
import './Tabview.css';

import styled from 'styled-components';

const { TabPane } = Tabs;


const tabData = [
    {
        'name': 'Grants (1)',
        'GiftId': 'Gift ID: 4436109-1',
        'desc': 'Vanguard Corona relief Admiral Shares.',
        'tableData': {
            'Entered date': '31/6/2019',
            'Received date': '31/6/2019',
            'Number of shares': '39',
            'Type': 'VBS Security',
            'Amount': '$20,000.00',
            'Status': 'Entered',
        },
        'linkBtn': 'View Grants Activity'
    },
    {
        'name': 'Contributions (1890)',

        'GiftId': 'Gift ID: 4436109-2',
        'desc': 'Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares.',
        'tableData': {
            'Entered date': '10/4/2019',
            'Received date': '10/4/2019',
            'Number of shares': '50',
            'Type': 'VBS Security',
            'Amount': '$50,000.00',
            'Status': 'Entered',
        },
        'linkBtn': 'View Contribution Activity'
    },
    {
        'name': 'Exchange (0)',
        'GiftId': 'Gift ID: 4436109-3',
        'desc': 'Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares.',
        'tableData': {
            'Entered date': '31/2/2019',
            'Received date': '31/6/2019',
            'Number of shares': '89',
            'Type': 'VBS Security',
            'Amount': '$189,000.00',
            'Status': 'Entered',
        },
        'linkBtn': 'View Exchange Activity'
    },
    {
        'name': 'Other Transactions (0)',
        'GiftId': 'Gift ID: 4436109-4',
        'desc': 'Vanguard Corona relief Admiral Shares.',
        'tableData': {
            'Entered date': '20/6/2019',
            'Received date': '31/6/2019',
            'Number of shares': '45',
            'Type': 'Always Secure',
            'Amount': '$120,000.00',
            'Status': 'Entered',
        },
        'linkBtn': 'View Other Transactions'
    },
]


const StyledTable = styled.table`
margin:20px 30px;
width:90%;
& >h3{
     font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0.5px;
  color:#006778;
  margin-bottom:15px;
}
&>p:first-of-type{
    font-size: 16px;
    line-height: 1.5;
  letter-spacing: normal;
  color: #505050;
  margin-bottom:15px;
}
& tr{
    display:flex;
    /* justify-content:space-between; */
    /* margin-bottom:20px; */
}
& th,td{
    display:block;
    flex:1;
    text-align:left;
     font-size: 16px;
      line-height: 1.5;

    /* padding:10px; */
}
& th{
    color:#505050;
}
& td{
    margin-bottom:20px;
    color:#022737;
    font-weight:bold;
}
& hr{
    margin:10px 0;
    background-color:#d4d4d4;
    height:2px;
    opacity:0.9;
}
& p:last-of-type{
     font-family: HelveticaNeue;
    margin:10px 5px;
 font-size: 16px;
  font-weight: bold;
  font-stretch: condensed;
  letter-spacing: 0.5px;
  color: #006778;
}


`;

const TabView = () => {

    return (
        <Tabs type='card'>
            {
                tabData.map(item => (
                    <TabPane key={item.name} tab={item.name}>

                        <StyledTable>
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
                        </StyledTable>
                    </TabPane>
                ))
            }

        </Tabs>



    );
}

export default TabView;