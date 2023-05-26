import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <span className="close">&times;</span>
      <div className="modal-children">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
