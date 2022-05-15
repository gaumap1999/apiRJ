import React, { Component } from "react";

class Modal extends Component {
    constructor (props) {
    super(props);
    this.state = {
      modalIsOpen: false
    }
  };
    openModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };
  render() {
    return (
      <div>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <button onClick={this.closeModal}>Close</button>
          <div>Nội dung Modal</div>
        </Modal>
      </div>
    );
  }
}

export default Modal;
