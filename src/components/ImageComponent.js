import React, { Component, Fragment } from "react";
import Modal from "react-awesome-modal";

class ImageComponent extends Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <Fragment>
        <img src={this.props.img} onClick={this.handleShowDialog} alt="" />
        <Modal
          visible={this.state.isOpen}
          effect="fadeInUp"
          onClickAway={() => this.handleShowDialog()}
        >
          <img
            className="image"
            src={this.props.img}
            onClick={this.handleShowDialog}
            alt=""
          />
        </Modal>
      </Fragment>
    );
  }
}

export default ImageComponent;
