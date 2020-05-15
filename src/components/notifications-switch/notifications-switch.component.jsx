import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectNotificationIsVisible } from '../../redux/notification/notification.selectors';
import {
  hideNotification,
  showNotification,
} from '../../redux/notification/notification.actions';
import Section from '../section/section.component';
import SecondaryHeading from '../typography/secondary-heading/secondary-heading.component';
import Switch from 'rc-switch';

import './notifications-switch.styles.scss';

const NotificationsSwitch = ({
  isVisible,
  hideNotification,
  showNotification,
}) => {
  const switchNotifications = (value, event) => {
    if (value) {
      showNotification();
    } else hideNotification();
  };
  return (
    <Section>
      <SecondaryHeading>Notifications</SecondaryHeading>
      <div className="notifications-switch__wrapper">
        <Switch
          className="notifications-switch__switch"
          onChange={switchNotifications}
          checked={isVisible}
        />
        <p>Show all notifications</p>
      </div>
    </Section>
  );
};

const mapStateToProps = createStructuredSelector({
  isVisible: selectNotificationIsVisible,
});

const mapDispatchToProps = (dispatch) => ({
  hideNotification: () => dispatch(hideNotification()),
  showNotification: () => dispatch(showNotification()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsSwitch);
