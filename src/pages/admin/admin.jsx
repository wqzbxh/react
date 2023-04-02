import React, { Component } from "react";
import memoryUtils from "../../utils/memoryUtils";
import localstorageUnits from "../../utils/localstorageUnits";
import { Navigate } from 'react-router-dom';
import { Layout, Select,Table } from 'antd';

import LeftNav from "../../components/left-nav";
import HeaderNav from "../../components/header-nav";
const { Header, Footer, Sider, Content } = Layout;
const { Option  } = Select;
/**
 * 登录的路由组件
 */

function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }

  const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      width: 150,
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      width: 150,
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
      width: 150,
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
      width: 150,
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
      width: 150,
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',
      width: 150,
    },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];
  
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
 
export default class Admin extends Component {

    render() {
        const user = memoryUtils.user;
        if (!user.username) {
            const userData = {};
            // 自动跳转登录
            return <Navigate to="/login" />;
        }
        // return ( <div>
        //     Hello { user.username }
        // </div>)
        return (
            <Layout style={{ height: '100%' }}>
                <Sider><LeftNav /></Sider>
                <Layout>
                    <Header><HeaderNav /></Header>
                    <Content>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>,
                        <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}
