import React from 'react';
import { Spin } from 'antd';
import { StyledTable, LoaderDiv } from './TabviewStyle';


class TableData extends React.Component {
    state = {
        isLoading: true,
        error: false,
        data: null
    }
    async componentDidMount() {
        try {
            const url = this.props.url;
            const response = await fetch(url)
            const data = await response.json();
            this.successHandler(data);
        } catch (error) {
            this.errorHandler(error)
        }
        if (!this.state.error) { this.props.updateNum(this.state.data.title, this.state.data.count) }
    }

    successHandler = (response) => {

        this.setState({
            isLoading: false,
            data: response.data

        });
    }
    errorHandler = (error) => {
        console.log(error);
        this.setState({
            error: true
        })
    }
    render() {
        return (
            !this.state.isLoading ? <StyledTable>
                <h3>{this.state.data.GiftId}</h3>
                <p>{this.state.data.desc}</p>
                <tr>
                    <th>Entered date</th>
                    <th>Received date</th>
                    <th>Number of shares</th>
                </tr>
                <tr>
                    <td>{this.state.data.tableData["Entered date"]}</td>
                    <td>{this.state.data.tableData["Received date"]}</td>
                    <td>{this.state.data.tableData["Number of shares"]}</td>
                </tr>
                <tr>

                    <th>Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>{this.state.data.tableData.Type}</td>
                    <td>{this.state.data.tableData.Amount}</td>
                    <td>{this.state.data.tableData.Status}</td>
                </tr>
                <hr></hr>
                <p>{this.state.data.linkBtn}</p>
            </StyledTable> : <LoaderDiv>{this.state.error ? <h1>Error in loading....!!</h1> : <Spin />}</LoaderDiv>
        );
    }
}
export default TableData;

// {
//     "response": "Success",
//         "data": [
//             {
//                 "name": "Grants (5)",
//                 "GiftId": "Gift ID: 4436109-1",
//                 "desc": "Vanguard Corona relief Admiral Shares.",
//                 "tableData": {
//                     "Entered date": "31/6/2019",
//                     "Received date": "31/6/2019",
//                     "Number of shares": "39",
//                     "Type": "VBS Security",
//                     "Amount": "$20,000.00",
//                     "Status": "Entered"
//                 },
//                 "linkBtn": "View Grants Activity"
//             },
//             {
//                 "name": "Contributions (1890)",

//                 "GiftId": "Gift ID: 4436109-2",
//                 "desc": "Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares.",
//                 "tableData": {
//                     "Entered date": "10/4/2019",
//                     "Received date": "10/4/2019",
//                     "Number of shares": "50",
//                     "Type": "VBS Security",
//                     "Amount": "$50,000.00",
//                     "Status": "Entered"
//                 },
//                 "linkBtn": "View Contribution Activity"
//             },
//             {
//                 "name": "Exchange",
//                 "GiftId": "Gift ID: 4436109-3",
//                 "desc": "Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares.",
//                 "tableData": {
//                     "Entered date": "31/2/2019",
//                     "Received date": "31/6/2019",
//                     "Number of shares": "89",
//                     "Type": "VBS Security",
//                     "Amount": "$189,000.00",
//                     "Status": "Entered"
//                 },
//                 "linkBtn": "View Exchange Activity"
//             },
//             {
                // "name": "Other Transactions (0)",
                // "GiftId": "Gift ID: 4436109-4",
                // "desc": "Vanguard Corona relief Admiral Shares.",
                // "tableData": {
                //     "Entered date": "20/6/2019",
                //     "Received date": "31/6/2019",
                //     "Number of shares": "45",
                //     "Type": "Always Secure",
                //     "Amount": "$120,000.00",
                //     "Status": "Entered"
                // },
                // "linkBtn": "View Other Transactions"
//             }
//         ]


// }