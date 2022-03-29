import React from 'react';
import { Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import image1 from '../static/img/152960.svg';
import image2 from '../static/img/295648.svg';
import image3 from '../static/img/841606.svg';

const { Title } = Typography;

const HomePage = () => (
  <>
    <Title className='main-title'>Ավարտական աշխատանք</Title>

    <Row gutter={16}>
      <Col span={8}>
        <Card
          title={<Link to='/indicators'>Ֆինանսական ցուցանիշների հաշվարկ</Link>}
          image={image1} />
      </Col>
      <Col span={8}>
        <Card
          title={<Link to='/stability'>Ֆին. կայունության ցուցանիշների հաշվարկ</Link>}
          image={image2} />
      </Col>
      <Col span={8}>
        <Card title='Գրաֆիկական վերլուծություն' image={image3} />
      </Col>
    </Row>
  </>
);

export default HomePage;
