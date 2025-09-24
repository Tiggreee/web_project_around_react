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

  const handleContentClick = (event) => {
    // For image popups, close when clicking outside the image
    if (!title && event.target.classList.contains('popup__content')) {
      onClose();
    }
  };

  return (
    <div className={`popup popup_opened ${!title ? 'popup_type_image' : ''}`} onClick={handleOverlayClick}>
      <div className="popup__overlay"></div>
      <div
        className="popup__content"
        onClick={handleContentClick}
      >
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        >
          ×
        </button>
        
        {title && <h3 className="popup__title">{title}</h3>}

        {children}
      </div>
    </div>
  );
}