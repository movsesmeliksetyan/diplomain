import React from 'react';
import 'antd/dist/antd.css';
import './static/css/main.css';
import { Layout } from 'antd';
import {
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import IndicatorsPage from './pages/IndicatorsPage';
import Header from './components/Header';
import Help from './pages/Help';

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className='layout'>
      <Header />

      <Content style={{ padding: '0 50px' }}>
        <div className='site-layout-content content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/indicators' element={<IndicatorsPage />} />
            <Route path='/help' element={<Help />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
