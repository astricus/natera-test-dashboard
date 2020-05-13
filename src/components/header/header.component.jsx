import React from 'react';
import { connect } from 'react-redux';
import { selectMode } from '../../redux/mode/mode.selectors';
import { setMode } from '../../redux/mode/mode.actions';
import Container from '../grid/container/container.component';

import './header.styles.scss';

const Header = ({ mode, setMode }) => (
  <div className="header">
    <Container>
      <ul className="header__navigation navigation">
        <li>
          <button
            className={`navigation__item ${
              mode ? 'navigation__item--active' : ''
            }`}
            onClick={() => setMode(true)}
          >
            Dashboard mode
          </button>
        </li>
        <li>
          <button
            className={`navigation__item ${
              !mode ? 'navigation__item--active' : ''
            } d-non-xs`}
            onClick={() => setMode(false)}
          >
            Edit mode
          </button>
        </li>
      </ul>
    </Container>
  </div>
);

const mapStateToProps = (state) => ({
  mode: selectMode(state),
});

const mapDispatchToProps = (dispatch) => ({
  setMode: (mode) => dispatch(setMode(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
