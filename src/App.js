import React from 'react';
import { connect } from 'react-redux';
import { selectMode } from './redux/mode/mode.selectors';
import { CSSTransition } from 'react-transition-group';
import Header from './components/header/header.component';
import Container from './components/grid/container/container.component';
import DashboardMode from './components/dashboard-mode/dashboard-mode.component';
import EditMode from './components/edit-mode/edit-mode.component';
import PostModal from './components/post/post-modal/post-modal.component';
import PostCreateModal from './components/post/post-create-modal/post-create-modal.component';

import './App.scss';

const App = ({ mode }) => {
  return (
    <>
      <Header />
      <Container>
        <CSSTransition
          in={!mode}
          timeout={300}
          classNames={`main__animation-change-mode`}
        >
          <main className="main">
            <DashboardMode />
            <EditMode />
          </main>
        </CSSTransition>
        <PostModal />
        <PostCreateModal />
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  mode: selectMode(state),
});

export default connect(mapStateToProps)(App);
