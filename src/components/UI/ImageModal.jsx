import { useState } from "react";
import "./ImageModal.css";
import { PropTypes } from "prop-types";

const ImageModal = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className={className}>
      <img src={src} alt={alt} onClick={openModal} />
      {isOpen && (
        <div className="modal">
          <span className="close" onClick={handleClick}>
            &times;
          </span>
          <img
            src={src}
            alt={alt}
            className="modal-image"
            onClick={handleClick}
          />
        </div>
      )}
    </div>
  );
};

ImageModal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ImageModal;
