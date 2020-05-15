import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMode } from '../../redux/mode/mode.selectors';
import { selectNotificationIsVisible } from '../../redux/notification/notification.selectors';
import { hideNotification } from '../../redux/notification/notification.actions';
import { CSSTransition } from 'react-transition-group';

import './notification.styles.scss';

const Notification = ({ isVisible, mode, hideNotification }) => {
  const notificationTimeout = 8000;
  useEffect(() => {
    if (mode) {
      const timer = setTimeout(() => {
        if (isVisible) hideNotification();
      }, notificationTimeout);
      return () => clearTimeout(timer);
    }
  });
  return (
    <CSSTransition
      in={isVisible}
      timeout={200}
      classNames="notification__animation"
    >
      <div className={`${isVisible ? '' : 'd-non'} notification d-non-xs`}>
        <img
          src="/img/SVG/Asset 4.svg"
          alt="Notification icon"
          className="notification__icon"
        />
        <div className="notification__item">
          <h3 className="notification__message">
            Don't forget to publish weekly notes about manager's work!
          </h3>
          <p className="notification__close-message">
            Notification will be closed after 8 seconds
          </p>
        </div>
        <button
          className="notification__close-btn"
          onClick={() => hideNotification()}
        >
          <img
            src="/img/SVG/Asset 7.svg"
            alt="Notification close icon"
            className="notification__close-icon"
          />
        </button>
      </div>
    </CSSTransition>
  );
};

const mapStateToProps = createStructuredSelector({
  isVisible: selectNotificationIsVisible,
  mode: selectMode,
});

const mapDispatchToProps = (dispatch) => ({
  hideNotification: () => dispatch(hideNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
