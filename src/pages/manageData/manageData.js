
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table, Input, InputNumber, Popconfirm, Form, Space } from 'antd';
import { useSelector } from "react-redux";


import * as styledComp from './manageStyle';


const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                    children
                )}
        </td>
    );
};

const EditableTable = (props) => {
    const allData = useSelector(state => [...state.data]);
    const [form] = Form.useForm();
    const [data, setData] = useState([...allData]);
    const [editingKey, setEditingKey] = useState('');
    useEffect(() => setData(props.List), [props.List]);

    const isEditing = record => record.key === editingKey;

    const edit = record => {
        form.setFieldsValue({
            name: '',
            email: '',
            query: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const deleteFn = (key) => {
        const updateList = [...data];
        const newData = updateList.filter(item => item.key !== key);
        setData(newData);
        props.deleteData(key)
    }

    const cancel = () => {
        setEditingKey('');
    };

    const save = async key => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
                props.updateData(newData);
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '25%',
            editable: true,
        },
        {
            title: 'email',
            dataIndex: 'email',
            width: '15%',
            editable: true,
        },
        {
            title: 'query',
            dataIndex: 'query',
            width: '40%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <a
                            href="javascript:;"
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
            </a>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                        <Space size="middle">

                            <a disabled={editingKey !== ''} onClick={() => edit(record)}>
                                Edit
                        </a>
                            <Popconfirm title="Sure to delete?" onConfirm={() =>
                                deleteFn(record.key)
                            }>
                                <a>Delete</a>
                            </Popconfirm>
                        </Space>
                    );
            },
        },
    ];
    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: record => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <Form form={form} component={false}>
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange: cancel,
                }}
            />
            {!(props.List.length === 0) ?
                <Popconfirm title="Sure to delete?" onConfirm={() => {
                    localStorage.clear();
                    window.location.reload();
                }
                }>
                    <styledComp.styleButton danger>Delete All</styledComp.styleButton>
                </Popconfirm>
                : null}
            <Link to='/'><styledComp.styleButton>Back</styledComp.styleButton></Link>
        </Form>
    );
};

const mapStateToProps = state => {
    return {
        List: state.data,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        deleteData: (key) => dispatch({ type: 'Delete-Data', key: key }),
        updateData: (nwData) => dispatch({ type: 'Update-Data', newData: nwData }),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(EditableTable);
