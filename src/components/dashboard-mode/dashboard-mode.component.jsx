import React from 'react';
import { connect } from 'react-redux';
import { selectMode } from '../../redux/mode/mode.selectors';
import CompanyInfo from '../company-info/company-info.component';
import Highlights from '../highlights/highlights.component';
import Notification from '../notifications/notification.component';
import ProjectsStatuses from '../projects-statuses/projects-statuses.component';
import Footer from '../footer/footer.component';

import './dashboard-mode.styles.scss';

const DashboardMode = ({ mode }) => (
  <div className={`dashboard-mode ${!mode ? 'd-non' : ''}`}>
    <CompanyInfo />
    {/* Mode prop needed to be passed directly as true because animation take some time and <Highlights> is a reusable component. 
      Passing Redux state.mode.mode as a prop or using mapStateToProps inside this component and it's children will case this component update 
      when mode animation is triggered. */}
    <Highlights mode={true} />
    <Notification />
    {/* Mode prop needed to be passed directly as true because animation take some time and <ProjectsStatuses> is a reusable component. 
      Passing Redux state.mode.mode as a prop or using mapStateToProps inside this component and it's children will case this component update 
      when mode animation is triggered. */}
    <ProjectsStatuses key={`projects-statuses__${mode}`} mode={true} />
    <Footer />
  </div>
);

const mapStateToProps = (state) => ({
  mode: selectMode(state),
});

export default connect(mapStateToProps)(DashboardMode);
