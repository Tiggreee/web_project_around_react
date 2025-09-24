import { useEffect } from 'react';
import closeIcon from '../../../../images/close_button.png';

export default function Popup(props) {
  const { onClose, title, children } = props;

  // Handle ESC key press
  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscClose);
    return () => document.removeEventListener('keydown', handleEscClose);
  }, [onClose]);

  // Handle click outside popup
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="popup popup_opened" onClick={handleOverlayClick}>
      <div className="popup__overlay"></div>
      <div
        className={`popup__content ${
          !title ? "popup_type_image" : ""
        }`}
      >
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        >
          <img src={closeIcon} alt="Cerrar" />
        </button>
        
        {title && <h3 className="popup__title">{title}</h3>}

        {children}
      </div>
    </div>
  );
}