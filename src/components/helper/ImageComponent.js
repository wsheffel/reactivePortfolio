import React, { Fragment, useState } from "react";
import Modal from "react-awesome-modal";

const ImageComponent = ({ img, title }) => {
  const [isOpen, handleShowDialog] = useState(false);
  return (
    <Fragment>
      <img
        style={{ cursor: "pointer" }}
        src={img}
        alt={title}
        onClick={() => handleShowDialog(!isOpen)}
      />
      <Modal
        visible={isOpen}
        effect="fadeInUp"
        onClickAway={() => handleShowDialog(!isOpen)}
      >
        <img
          className="openImageModal"
          src={img}
          onClick={() => handleShowDialog(!isOpen)}
          alt={title}
        />
      </Modal>
    </Fragment>
  );
};

export default ImageComponent;
