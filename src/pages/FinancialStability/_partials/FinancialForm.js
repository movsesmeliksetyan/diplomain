import React from 'react';
import {
  Typography, Form, Button, InputNumber as Input,
} from 'antd';

const { Title } = Typography;

// eslint-disable-next-line react/prop-types
const FinancialForm = ({ onFinish, form }) => (<>
  <Form
    labelCol={{ span: 32 }}
    form={form}
    onFinish={onFinish}
    initialValues={{
      size: 'small',
    }}
    size='small'
    >
    <div>
      <Title level={3}>Ակտիվներ</Title>
      <Form.Item
        label='Բարձր իրացվելի ակտիվներ'
        name='highlyLiquidAssets'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Արագ իրացվելի ակտիվներ'
        name='fastSellingAssets'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Արագ իրացվելի ակտիվներ'
        name='slowSellingAssets'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Դժվար իրացվելի ակտիվներ'
        name='hardToSellAssets'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Վնաս'
        name='loss'
      >
        <Input />
      </Form.Item>
    </div>

    <div>
      <Title level={3}>Ակտիվներ</Title>

      <Form.Item
        label='Երկարաժամկետ պարտավորություններ'
        name='longTermLiabilities'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Կարճաժամկետ պարտավորություններ'
        name='shortTermLiabilities'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Ֆոնդեր և երկ. պարտավորություններ'
        name='fundsResponsibilities'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Սեփական կապիտալ'
        name='equity'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Հասույթ'
        name='revenue'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Ապրանքների իրացման ինքնարժեք'
        name='costOfGoodsSold'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Շահույթ(վնաս)'
        name='profitLoss'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Շահույթից միջոցներ'
        name='proceedsFromProfit'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Չբաշխված Շահույթ'
        name='retainedEarnings'
      >
        <Input />
      </Form.Item>
    </div>

    <Button type='primary' htmlType='submit'>
      Հաշվել
    </Button>
  </Form>
</>);

export default FinancialForm;
