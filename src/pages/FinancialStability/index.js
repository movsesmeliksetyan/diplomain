/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Typography, Form, Row, Col, Space, Button,
} from 'antd';
import FinancialForm from './_partials/FinancialForm';
import Results from './_partials/Results';
import cor from './img/cor.png';

const { Title } = Typography;

const IndicatorsPage = () => {
  const [form] = Form.useForm();
  const [showCor, setShowCor] = useState(false);
  const [K1, setK1] = useState(0);
  const [K2, setK2] = useState(0);
  const [K3, setK3] = useState(0);
  const [K4, setK4] = useState(0);
  const [K5, setK5] = useState(0);
  const [K6, setK6] = useState(0);
  const [K7, setK7] = useState(0);

  const onFinish = (values) => {
    const {
      highlyLiquidAssets,
      fastSellingAssets,
      slowSellingAssets,
      hardToSellAssets,
      loss,
      longTermLiabilities,
      shortTermLiabilities,
      equity,
      revenue,
      fundsResponsibilities,
      costOfGoodsSold,
      profitLoss,
      proceedsFromProfit,
      retainedEarnings,
    } = values;

    /*
    highlyLiquidAssets - A1
    fastSellingAssets - A2
    slowSellingAssets - A3
    hardToSellAssets - A4
    loss - A5

    longTermLiabilities - P1
    shortTermLiabilities - P2
    fundsResponsibilities - P3
    equity - P4
    revenue - P5
    costOfGoodsSold - P6
    profitLoss - P7
    proceedsFromProfit - P8
    retainedEarnings - P9
    */

    setK1(profitLoss / (highlyLiquidAssets + fastSellingAssets + slowSellingAssets + hardToSellAssets));
    setK2(revenue / (highlyLiquidAssets + fastSellingAssets + slowSellingAssets + hardToSellAssets));
    setK3(
      (highlyLiquidAssets + fastSellingAssets + slowSellingAssets + hardToSellAssets + loss)
       / (longTermLiabilities + shortTermLiabilities + fundsResponsibilities),
    );

    setK4(retainedEarnings / (highlyLiquidAssets + fastSellingAssets + slowSellingAssets + hardToSellAssets));

    setK5((highlyLiquidAssets + fastSellingAssets + slowSellingAssets)
    / (highlyLiquidAssets + fastSellingAssets + slowSellingAssets + hardToSellAssets));
    setK6(profitLoss / equity);
    setK7(profitLoss / revenue);
  };

  return (<>
    <Title className='main-title'>Ֆինանսական Ցուցանիշների Հաշվարկ</Title>

    <Row gutter={32}>
      <Col>
        <FinancialForm
          form={form}
          onFinish={onFinish}
        />
      </Col>

      <Col>
        <Space direction='vertical' size={32} >
          <Results
            K1={K1}
            K2={K2}
            K3={K3}
            K4={K4}
            K5={K5}
            K6={K6}
            K7={K7}
           />
        </Space>

      </Col>
    </Row>
    <Row>
      <Space direction='vertical' size={32}>
        <Button onClick={() => setShowCor(!showCor)}>Կորելացիոն Մատրից</Button>
        {showCor && <img src={cor} alt='cor' />}
      </Space>
    </Row>

  </>);
};

export default IndicatorsPage;
