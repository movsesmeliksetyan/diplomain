import React from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';

const StyledMenu = styled(Menu)`

`;

const Asd = () => (
  <StyledMenu mode='horizontal'>
    <Menu.Item key='mail'>
      Ֆինանսական ցուցանիշների հաշվարկ
    </Menu.Item>
    <Menu.Item key='app'>
      Ֆին. կայունության ցուցանիշների հաշվարկ
    </Menu.Item>
    <Menu.Item key='alipay'>
      Օգնություն
    </Menu.Item>
  </StyledMenu>
);

export default Asd;
