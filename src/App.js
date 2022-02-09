import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './App.css';
import * as api from './api';

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

const App = () => {
  const data = api.fetchList(); // dummy data를 반환하는 API
  console.log(data);
  
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
          </Menu>
          </Sider>
          <Content style={{padding: '200px'}}>Welcome to Quotabook.</Content>
        </Layout>
      </Layout>
    </div>
  )
};

export default App;