import { useEffect, useState } from 'react';
import closeIcon from '../../../../images/close_button.png';
import closeIconHover from '../../../../images/close_button_hover.png';

export default function Popup({ onClose, title, children }) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleEscClose = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEscClose);
    return () => document.removeEventListener('keydown', handleEscClose);
  }, [onClose]);

  const handleOverlayClick = (e) => e.target === e.currentTarget && onClose();

  return (
    <div className={`popup popup_opened ${!title ? 'popup_type_image' : ''}`} onClick={handleOverlayClick}>
      <div className="popup__content">
        <button 
          className="popup__close" 
          onClick={onClose}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={isHovered ? closeIconHover : closeIcon} alt="Cerrar" />
        </button>
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}