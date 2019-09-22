import React, { Fragment, useState } from "react";
import Modal from "react-awesome-modal";

// Let me use a HOOK here :)
const ImageComponent = props => {
  const [isOpen, handleShowDialog] = useState(false);
  return (
    <Fragment>
      <img
        style={{ cursor: "pointer" }}
        src={props.img}
        onClick={() => handleShowDialog(!isOpen)}
        alt={props.title}
      />
      <Modal
        visible={isOpen}
        effect="fadeInUp"
        onClickAway={() => handleShowDialog(!isOpen)}
      >
        <img
          className="image"
          src={props.img}
          onClick={() => handleShowDialog(!isOpen)}
          alt={props.title}
        />
      </Modal>
    </Fragment>
  );
};

export default ImageComponent;
