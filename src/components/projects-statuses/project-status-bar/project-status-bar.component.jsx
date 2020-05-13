import React, { useEffect, useState, useRef } from 'react';

import './project-status-bar.styles.scss';

const setProjectStatusBarWidth = (percents, width) => {
  const statusBarWidth = width;
  return (percents / 100) * statusBarWidth;
};

const ProjectStatusBar = (props) => {
  const { percents } = props;
  const [width, setWidth] = useState(0);
  const componentRef = useRef();

  const getWidth = () => componentRef.current.offsetWidth;

  useEffect(() => {
    const handleResize = () => setWidth(getWidth());
    if (componentRef.current && componentRef.current.offsetWidth !== 0) {
      setWidth(componentRef.current.offsetWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [componentRef]);

  return (
    <div className="project-status d-non-sm">
      <p className="project-status__percents">{percents}%</p>
      <div ref={componentRef} className="project-status__status-bar">
        <div
          className="project-status__project-status-bar"
          style={{
            width: setProjectStatusBarWidth(percents, width),
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectStatusBar;
