import React, { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }
  handleCloseModal = evt => {
    if (evt.code === 'Escape') {
      this.props.onCloseModal();
    }
  };
  handleCloseBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <div className={css.backdrop} onClick={this.handleCloseBackdrop}>
        <div className={css.modal}>
          <img className={css.modalImg} src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  largeImageURL: PropTypes.any.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
export default Modal;
