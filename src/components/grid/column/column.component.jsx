import React from 'react';

import './column.styles.scss';

const Column = ({ col, children }) => <div className={col}>{children}</div>;

export default Column;
