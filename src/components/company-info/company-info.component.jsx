import React from 'react';
import Row from '../grid/row/row.component';
import Column from '../grid/column/column.component';
import Card from '../card/card.component';
import Earnings from '../earnings/earnings.component';
import EmployeesAndProjects from '../employees-and-projects/employees-and-projects.component';
import './company-info.styles.scss';

const CompanyInfo = () => (
  <Row>
    <Column col="col-5-of-8 col-2-of-3-md col-12-xs">
      <Card>
        <Earnings />
      </Card>
    </Column>
    <Column col="col-3-of-8 col-4-md col-12-xs">
      <Card>
        <EmployeesAndProjects />
      </Card>
    </Column>
  </Row>
);

export default CompanyInfo;
