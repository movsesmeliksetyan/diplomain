import React from 'react';
import {
  Typography, Form, Button, InputNumber as Input,
} from 'antd';

const { Title } = Typography;

// eslint-disable-next-line react/prop-types
const IndicatorsPageForm = ({ onFinish, form }) => (<>
  <Title level={3}>Արժեքներ</Title>

  <Form
    labelCol={{ span: 16 }}
    form={form}
    onFinish={onFinish}
    initialValues={{
      size: 'small',
    }}
    size='small'
    >
    <Form.Item label='Շրջանառու ակտիվներ' name='currentAssets'>
      <Input />
    </Form.Item>

    <Form.Item label='Ընդհանուր ակտիվներ' name='totalAssets'>
      <Input />
    </Form.Item>

    <Form.Item label='Կարճաժամկետ պարտավորություններ' name='shortTermLiabilities'>
      <Input />
    </Form.Item>

    <Form.Item label='Դրամական միջոցներ' name='financialMeans'>
      <Input />
    </Form.Item>

    <Form.Item label='Շուկայական արժեթղթեր' name='marketSecurities'>
      <Input />
    </Form.Item>

    <Form.Item label='Դեբիտորական պարտք' name='accountsReceivable'>
      <Input />
    </Form.Item>

    <Form.Item label='Իրացված արտադրանքի ինքնարժեք' name='costOfSoldProducts'>
      <Input />
    </Form.Item>

    <Form.Item label='Այլ ծախսեր' name='otherExpenses'>
      <Input />
    </Form.Item>

    <Form.Item label='Երկարաժամկետ պարտք' name='longTermDebt'>
      <Input />
    </Form.Item>

    <Form.Item label='Սեփական կապիտալ' name='equity'>
      <Input />
    </Form.Item>

    <Form.Item label='Լիզինգի արժեք' name='leasingValue'>
      <Input />
    </Form.Item>

    <Form.Item label='Ընդհանուր պարտավորություններ' name='commonResponsibilities'>
      <Input />
    </Form.Item>

    <Form.Item label='Եկամուտ նախքան տոկոսի և հարկերի վճարումը' name='incomeBeforeTaxes'>
      <Input />
    </Form.Item>

    <Form.Item label='Ամորտիզացիա' name='depreciation'>
      <Input />
    </Form.Item>

    <Form.Item label='Տոկոս' name='percentage'>
      <Input />
    </Form.Item>

    <Button htmlType='submit'>
      Submit
    </Button>
  </Form>
</>);

export default IndicatorsPageForm;
