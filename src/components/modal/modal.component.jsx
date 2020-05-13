import React from 'react';
import { connect } from 'react-redux';
import { hideModal, setCurrentPost } from '../../redux/posts/posts.actions';
import { CSSTransition } from 'react-transition-group';
import './modal.styles.scss';

const Modal = ({ isVisible, hideModal, setCurrentPost, children }) => {
  const postModalClose = () => {
    setCurrentPost(null);
    hideModal();
  };

  const postModalBgClose = (event) => {
    if (event.target.className === 'modal__background') {
      setCurrentPost(null);
      hideModal();
    }
  };

  return (
    <CSSTransition
      appear={true}
      in={isVisible}
      timeout={400}
      classNames="modal__animation"
    >
      <div className={`modal ${isVisible ? '' : 'd-non'}`}>
        <div className="modal__background" onClick={postModalBgClose}>
          <div className="modal__wrapper-overflow">
            <div className="modal__wrapper">
              <button onClick={postModalClose} className="modal__btn-close">
                <img
                  src="/img/SVG/Asset 10.svg"
                  alt="Icon close"
                  className="modal__icon-close"
                />
              </button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
  setCurrentPost: (postId) => dispatch(setCurrentPost(postId)),
});

export default connect(null, mapDispatchToProps)(Modal);
