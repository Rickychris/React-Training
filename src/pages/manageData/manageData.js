import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table, Space, Popconfirm } from 'antd';


import * as styledComp from './manageStyle';



class ManageData extends React.Component {
    // state = {
    //     List: this.props.List
    // }

    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Query',
            dataIndex: 'query',
            key: 'query',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) =>
                (
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.props.deleteData(record.key)}>
                        <a>Delete</a>
                    </Popconfirm>
                ),
            // render: (text, record) => (
            //     <Space size="middle">
            //         <button onClick={editFn}>edit</button>
            //         <button onClick={deleteFn}>Delete</button>
            //     </Space>

            // ),
        },
    ];

    // deleteFn = (key) => {
    //     // console.log('delete', key);
    //     const updateList = [...this.state.List];
    //     this.setState({
    //         List: updateList.filter(item => item.key !== key),
    //     });
    // }

    editFn = () => {
        console.log('edit');
    }
    componentWillMount() {

        // let data = localStorage.getItem("DATA");
        this.props.getData();
        // let data = this.props.List;

        // if (data) {
        //     let dataList = JSON.parse(data);
        //     for (let i = 0; i < dataList.length; i++) {
        //         dataList[i].key = i;
        //     }
        // this.setState({

        //     List: this.props.List
        // });
        // }
    }
    render() {
        return (
            <div>

                <Table dataSource={this.props.List} columns={this.columns} />;

                {!(this.props.List.length === 0) ? <styledComp.styleButton danger onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                }}>Delete All</styledComp.styleButton>
                    : null}
                <Link to='/'><styledComp.styleButton>Back</styledComp.styleButton></Link>
            </div >
        );
    }
}
const mapStateToProps = state => {
    return {
        List: state.data,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch({ type: 'Get-Data' }),
        deleteData: (key) => dispatch({ type: 'Delete-Data', key: key }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageData);
