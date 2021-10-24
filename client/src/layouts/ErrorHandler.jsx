import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ClearError } from "../features/actions/ErrorActions";
const HandleError = ({ children }) => {
  const { error } = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const [showError, setShow] = useState(false);

  useEffect(() => {
    if (error && !error.success) {
      setShow(true);
    }
  }, [error]);

  const handleClose = async () => {
    await dispatch(ClearError());
    setShow(false);
  };

  return (
    <>
      {error && !error.success && (
        <Modal
          show={showError}
          onHide={handleClose}
          centered
          size="sm"
          className="m-2"
        >
          {/* <div
            className="d-flex align-items-center justify-content-between text-danger  m-2 p-4"
            style={{ height: "30px", fontSize: "20px" }}
          >
            <div>{error.status}</div>

            <div style={{ height: "30px" }} onClick={handleClose}>
              <i className="bi bi-x-circle-fill" />
            </div>
          </div> */}
          <div
            className="d-flex align-items-center justify-content-center text-danger mt-4 mx-4 p-4"
            style={{ height: "30px", fontSize: "18px" }}
          >
            {error.status ? error.status : 500}
            {" : "}
            {error.message
              ? error.message
              : "Something went wrong. Please try again later."}
          </div>
          <button
            className="btn bg-danger text-white m-4"
            onClick={handleClose}
          >
            Close
          </button>
        </Modal>
      )}
      <>{children}</>
    </>
  );
};

export default HandleError;
