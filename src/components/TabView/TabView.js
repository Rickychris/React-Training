import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Tabview.css';

import styled from 'styled-components';



const tabNames = ['Grants (1)', 'Contributions (1890)', 'Exchange (0)', 'Other Transactions (0)'];
const tabData = [

    {
        GiftId: 'Gift ID: 4436109-1',
        desc: 'Vanguard Corona relief Admiral Shares.',
        tableData: {
            tableTitle1: ['Entered date', 'Received date', 'Number of shares',],
            tableTitle2: ['Type', 'Amount', 'Status'],
            tableValue1: ['31/6/2019', '17/3/2019', '39',],
            tableValue2: ['VBS Security', '$20,000.00', 'Entered']
        },
        linkBtn: 'View Contribution Activity'
    },
    {
        GiftId: 'Gift ID: 4436109-2',
        desc: 'Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares.',
        tableData: {
            tableTitle1: ['Entered date', 'Received date', 'Number of shares',],
            tableTitle2: ['Type', 'Amount', 'Status'],
            tableValue1: ['10/4/2019', '10/4/2019', '50',],
            tableValue2: ['VBS Safety', '$50,000.00', 'Entered']
        },
        linkBtn: 'View Contribution Activity'
    },
    {
        GiftId: 'Gift ID: 4436109-3',
        desc: 'Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares.',
        tableData: {
            tableTitle1: ['Entered date', 'Received date', 'Number of shares',],
            tableTitle2: ['Type', 'Amount', 'Status'],
            tableValue1: ['20/3/2019', '01/12/2019', '45',],
            tableValue2: ['VBS Security', '$120,000.00', 'Entered']
        },
        linkBtn: 'View Contribution Activity'
    },
    {
        GiftId: 'Gift ID: 4436109-4',
        desc: 'Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares.',
        tableData: {
            tableTitle1: ['Entered date', 'Received date', 'Number of shares',],
            tableTitle2: ['Type', 'Amount', 'Status'],
            tableValue1: ['24/10/2019', '10/3/2019', '76',],
            tableValue2: ['Divine Secure', '$189,000.00', 'Entered']
        },
        linkBtn: 'View Contribution Activity'
    },
]

// const StylTabs = styled.div`

//     /* display:flex;
//     &>div{
//         padding:20px 35px;
//         background-color:#f1f1f1;
//         text-align:center;
//         font-family: HelveticaNeue;
//   font-size: 16px;
//   font-weight: bold;
//   line-height: 1;
//   letter-spacing: 0.5px;
//   color: #505050;
//     } */
// `;

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
    color:#d4d4d4;
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

const TabNames = tabNames.map(tab => <Tab>{tab}</Tab>);
const TabData = tabData.map(tab => {
    return (

        <TabPanel key={tab.GiftId}>
            <StyledTable>
                <h3>{tab.GiftId}</h3>
                <p>{tab.desc}</p>
                <tr>
                    {tab.tableData.tableTitle1.map(d => <th>{d}</th>)}

                </tr>
                <tr>
                    {tab.tableData.tableValue1.map(d => <td>{d}</td>)}

                </tr>
                <tr>
                    {tab.tableData.tableTitle2.map(d => <th>{d}</th>)}

                </tr>
                <tr>
                    {tab.tableData.tableValue2.map(d => <td>{d}</td>)}
                </tr>
                <hr></hr>
                <p>{tab.linkBtn}</p>
            </StyledTable>

        </TabPanel>
    );
});
const TabView = () => {

    console.log(tabData);
    return (

        // <StylTabs>
        <Tabs>

            <TabList>
                {TabNames}
            </TabList>

            {TabData}

        </Tabs>

        // </StylTabs>


    );
}

export default TabView;