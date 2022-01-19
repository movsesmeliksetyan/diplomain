import React from 'react';
import {
  Typography,
  Space,
} from 'antd';

const { Title, Text } = Typography;

const LiquidityRatios = () => (<>
  <Title level={3}>Ֆինանսական կախվածության գործակիցներ</Title>

  <Space direction='vertical'>
    <Text>Պարտքային բեռնվածության գործակից: {12}</Text>
    <Text>Ընթացիկ իրացվելիության գործակից: {12}</Text>
    <Text>Պարտք-Ընդ․ պարտավորություն: {12}</Text>
    <Text>Տոկոսի ծածկման գործակից: {12}</Text>
    <Text>Ֆինանսական լևերիջ: {12}</Text>
  </Space>
</>);

export default LiquidityRatios;
