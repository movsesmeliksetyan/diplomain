/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Typography, Form, Row, Col, Space,
} from 'antd';

const { Title } = Typography;

const IndicatorsPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {

  };

  return (<>
    <Title className='main-title'>Ֆին. կայունության ցուցանիշների հաշվարկ</Title>

    <Row gutter={32}>
      <Col />

      <Col>
        <Space direction='vertical' size={32} />
      </Col>
    </Row>
  </>);
};

export default IndicatorsPage;
