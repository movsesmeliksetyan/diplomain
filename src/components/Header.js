import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import Menu from './Menu';

const { Header: Component } = Layout;

const StyledHeader = styled(Component)`
    padding: 0;
    box-shadow: 4px 4px 40px 0 rgb(0 0 0 / 5%);
    z-index: 9;
    background-color: #fff !important;
    display: flex;
    justify-content: flex-end;
    padding: 0 28px;
}
`;

const Header = () => (
  <StyledHeader>
    <Menu />
  </StyledHeader>
);

export default Header;
