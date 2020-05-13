import React from 'react';
import { connect } from 'react-redux';
import { selectMode } from '../../redux/mode/mode.selectors';
import Highlights from '../highlights/highlights.component';
import NotificationsSwitch from '../notifications-switch/notifications-switch.component';
import ProjectsStatuses from '../projects-statuses/projects-statuses.component';
import Footer from '../footer/footer.component';

import './edit-mode.styles.scss';

const EditMode = ({ mode }) => (
  <div className={`edit-mode ${mode ? 'd-non' : ''} d-non-xs`}>
    {/* Mode prop needed to be passed directly as true because animation take some time and <Highlights> is a reusable component. 
      Passing Redux state.mode.mode as a prop or using mapStateToProps inside this component and it's children will case this component update 
      when mode animation is triggered. */}
    <Highlights mode={false} />
    {/* Mode prop needed to be passed directly as true because animation take some time and <ProjectsStatuses> is a reusable component. 
      Passing Redux state.mode.mode as a prop or using mapStateToProps inside this component and it's children will case this component update 
      when mode animation is triggered. */}
    <ProjectsStatuses key={`projects-statuses__${mode}`} mode={false} />
    <NotificationsSwitch />
    <Footer />
  </div>
);

const mapStateToProps = (state) => ({
  mode: selectMode(state),
});

export default connect(mapStateToProps)(EditMode);
