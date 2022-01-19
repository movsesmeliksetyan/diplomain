import React from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMenu = styled(Menu)`

`;

const Asd = () => (
  <StyledMenu mode='horizontal'>
    <Menu.Item key='home'>
      <Link to='/'>Գլխավոր էջ</Link>
    </Menu.Item>
    <Menu.Item key='indicators'>
      <Link to='/indicators'>Ֆինանսական ցուցանիշների հաշվարկ</Link>
    </Menu.Item>
    <Menu.Item key='app'>
      Ֆին. կայունության ցուցանիշների հաշվարկ
    </Menu.Item>
    <Menu.Item key='alipay'>
      <Link to='/help'>Օգնություն</Link>
    </Menu.Item>
  </StyledMenu>
);

export default Asd;
