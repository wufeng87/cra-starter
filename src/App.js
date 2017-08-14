import React, { Component } from 'react';

import logo from './logo.svg';


import './App.css';
import './App.less'

import SHMenu from './components/app/SHMenu'

import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

//
// jest.unmock('components/App/SHMenu');


// <img src={logo} className="App-logo" alt="logo" />
class App extends Component {
  render() {
    return (
      <Layout style={{ height: "100%" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="logo" />
          <SHMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 480 }}>
              content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
