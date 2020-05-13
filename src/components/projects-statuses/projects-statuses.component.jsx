import React from 'react';
import Section from '../section/section.component';
import SecondaryHeading from '../typography/secondary-heading/secondary-heading.component';
import Row from '../grid/row/row.component';
import Column from '../grid/column/column.component';
import Card from '../card/card.component';
import ProjectStatusesTable from './projects-statuses-table/projects-statuses-table.component';

const ProjectsStatuses = ({ mode }) => (
  <Section>
    <SecondaryHeading>Projects Statuses</SecondaryHeading>
    <Row>
      <Column col="col-12">
        <Card>
          <ProjectStatusesTable mode={mode} />
        </Card>
      </Column>
    </Row>
  </Section>
);

export default ProjectsStatuses;
