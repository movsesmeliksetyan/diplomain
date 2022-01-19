/* eslint-disable react/prop-types */
import React from 'react';
import {
  Typography,
  Space,
} from 'antd';

const { Title, Text } = Typography;

const LiquidityRatios = ({
  cleanWorkingCapital,
  currentLiquidityRatio,
  termLiquidityRatio,
  absoluteLiquidityRatio,
  timer,
  solvency,
}) => (<>
  <Title level={3}>Իրացվելիության գործակիցներ</Title>

  <Space direction='vertical'>
    <Text display='block'>Մաքուր շրջանառու կապիտա: {cleanWorkingCapital}</Text>
    <Text>Ընթացիկ իրացվելիության գործակից: {currentLiquidityRatio}</Text>
    <Text>Ժամկետային իրացվելիության գործակից: {termLiquidityRatio}</Text>
    <Text>Բացարձակ իրացվելիության գործակից: {absoluteLiquidityRatio}</Text>
    <Text>Ժամանակահատվածի չափիչ: {timer}</Text>
    <Text>Վճարունակություն: {solvency}</Text>
  </Space>
</>);

export default LiquidityRatios;
