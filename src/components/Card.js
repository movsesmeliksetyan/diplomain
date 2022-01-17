import React from 'react';
import { Card as Component } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Component)`
    border: 2px solid #f0f0f0;
    border-radius: 6px;

    .ant-card-body {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        min-height: 300px;
    }

    .ant-card-head-title {
        font-size: 15px;
        text-align: center;
    }

    img {
        max-height: 250px;
        max-width: 100%;
    }
`;

// eslint-disable-next-line react/prop-types
const Card = ({ image, title }) => (
  <StyledCard title={title} bordered={false}>
    <img src={image} />
  </StyledCard>
);

export default Card;
