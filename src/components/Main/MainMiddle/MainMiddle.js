import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import classes from './MainMiddle.module.css';
import Button from '../../Button/Button';
// import ArrowImg from '../../../assets/images/arrow-white-r.png';


const buttonData = ['Contribution', 'Grant', 'Exchange'];
const menu = (
    <Menu>
        <Menu.Item>
            <Link to='/data'>View all data</Link>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" href="https://github.com/Rickychris/React-Training">
                Open Source on Github
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" href="/data">
                View All Requests
      </a>
        </Menu.Item>
    </Menu>
);
const mainMiddle = () => (
    <div className={[classes.MainMiddle, 'MaxWidth'].join(' ')}>

        {buttonData.map((data, id) => <Button key={data}> {data}</Button>)}

        <Dropdown overlay={menu}>
            <Button invert>Manage your account   &nbsp;&nbsp;<DownOutlined /></Button>
            {/* <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Hover me <DownOutlined />
            </a> */}
        </Dropdown>

    </div>
);

export default mainMiddle;