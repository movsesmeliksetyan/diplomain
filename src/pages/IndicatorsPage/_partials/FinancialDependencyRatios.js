/* eslint-disable react/prop-types */
import React from 'react';
import {
  Typography,
  Space,
} from 'antd';

const { Title, Text } = Typography;

const LiquidityRatios = ({
  debtLoadRatio,
  debtEquity,
  debtAgainstObligation,
  percentageCoverageRatio,
  financialSeriousness,
}) => (<>
  <Title level={3}>Ֆինանսական կախվածության գործակիցներ</Title>

  <Space direction='vertical'>
    <Text>Պարտքային բեռնվածության գործակից: {debtLoadRatio}</Text>
    <Text>Պարտք – Սեփական կապիտալ: {debtEquity}</Text>
    <Text>Պարտք-Ընդ․ պարտավորություն: {debtAgainstObligation}</Text>
    <Text>Տոկոսի ծածկման գործակից: {percentageCoverageRatio}</Text>
    <Text>Ֆինանսական լևերիջ: {financialSeriousness}</Text>
  </Space>
</>);

export default LiquidityRatios;
