import React from 'react';
import 'antd/dist/antd.css';
import './static/css/main.css';
import { Layout } from 'antd';
import {
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className='layout'>
      <Header />

      <Content style={{ padding: '0 50px' }}>
        <div className='site-layout-content content'>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
