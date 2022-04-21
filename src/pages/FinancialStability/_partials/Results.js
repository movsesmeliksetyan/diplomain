/* eslint-disable react/prop-types */
import React from 'react';
import {
  Typography,
  Space,
} from 'antd';

const { Text } = Typography;

const Results = ({
  K1,
  K2,
  K3,
  k4,
  K5,
  k6,
  k7,
}) => (<>

  <Space direction='vertical'>
    <Text display='block'>K1: {K1}</Text>
    <Text>K2: {K2}</Text>
    <Text>K3: {K3}</Text>
    <Text>k4: {k4}</Text>
    <Text>K5: {K5}</Text>
    <Text>k6: {k6}</Text>
    <Text>k7: {k7}</Text>
  </Space>
</>);

export default Results;
