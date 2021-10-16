import React from "react";
import { Modal, Button } from "react-bootstrap";
const ErrorModal = (props) => {
  const { error, show, handleShow, handleClose, size } = props;
  return (
    <Modal
      size={size}
      centered
      show={show}
      onShow={handleShow}
      onHide={handleClose}
    >
      <div className="p-3 d-flex flex-column justify-content-left align-items-center">
        <div className="text-danger h6">
          Status Code : {error.status.toString()}
        </div>
        <div className="text-danger font-family-bold mark h6">
          Error : {error.message}
        </div>
        <Button className="mt-2 w-100" variant="danger" onClick={handleClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default ErrorModal;
