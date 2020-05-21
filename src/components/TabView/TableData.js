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

