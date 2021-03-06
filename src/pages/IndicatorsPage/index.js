/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Typography, Form, Row, Col, Space,
} from 'antd';
import IndicatorsPageForm from './_partials/IndicatorsPageForm';
import LiquidityRatios from './_partials/LiquidityRatios';
import FinancialDependencyRatios from './_partials/FinancialDependencyRatios';

const { Title } = Typography;

const IndicatorsPage = () => {
  const [form] = Form.useForm();
  const [cleanWorkingCapital, setCleanWorkingCapital] = useState(0);
  const [currentLiquidityRatio, setCurrentLiquidityRatio] = useState(0);
  const [termLiquidityRatio, setTermLiquidityRatio] = useState(0);
  const [absoluteLiquidityRatio, setAbsoluteLiquidityRatio] = useState(0);
  const [timer, setTimer] = useState(0);
  const [solvency, setSolvency] = useState(0);

  const [debtLoadRatio, setDebtLoadRatio] = useState(0);
  const [debtEquity, setDebtEquity] = useState(0);
  const [debtAgainstObligation, setDebtAgainstObligation] = useState(0);
  const [percentageCoverageRatio, setPercentageCoverageRatio] = useState(0);
  const [financialSeriousness, setFinancialSeriousness] = useState(0);

  const onFinish = (values) => {
    setCleanWorkingCapital((values.currentAssets - values.totalAssets) / values.shortTermLiabilities);
    setCurrentLiquidityRatio(values.currentAssets / values.totalAssets);

    setTermLiquidityRatio(values.financialMeans + values.marketSecurities + values.accountsReceivable);

    setAbsoluteLiquidityRatio((values.financialMeans + values.marketSecurities) / values.commonResponsibilities);
    setTimer(
      (values.financialMeans + values.marketSecurities) / ((values.costOfSoldProducts + values.otherExpenses) / 365),
    );
    setSolvency((values.currentAssets + values.financialMeans) / values.shortTermLiabilities);

    setDebtLoadRatio((values.longTermDebt + values.leasingValue) / (values.longTermDebt + values.equity + values.leasingValue));
    setDebtEquity((values.longTermDebt + values.leasingValue) / values.equity);
    setDebtAgainstObligation((values.commonResponsibilities - values.equity) / values.commonResponsibilities);
    setPercentageCoverageRatio((values.incomeBeforeTaxes - values.depreciation) / values.percentage);

    setFinancialSeriousness(values.shortTermLiabilities / values.equity);
  };

  return (<>
    <Title className='main-title'>???????????????????? ???????????????????????? ??????????????</Title>

    <Row gutter={32}>
      <Col>
        <IndicatorsPageForm
          onFinish={onFinish}
          form={form} />
      </Col>

      <Col>
        <Space direction='vertical' size={32}>
          <LiquidityRatios
            cleanWorkingCapital={cleanWorkingCapital}
            currentLiquidityRatio={currentLiquidityRatio}
            termLiquidityRatio={termLiquidityRatio}
            absoluteLiquidityRatio={absoluteLiquidityRatio}
            timer={timer}
            solvency={solvency}
          />

          <FinancialDependencyRatios
            debtLoadRatio={debtLoadRatio}
            debtEquity={debtEquity}
            debtAgainstObligation={debtAgainstObligation}
            percentageCoverageRatio={percentageCoverageRatio}
            financialSeriousness={financialSeriousness}
          />
        </Space>
      </Col>
    </Row>
  </>);
};

export default IndicatorsPage;
