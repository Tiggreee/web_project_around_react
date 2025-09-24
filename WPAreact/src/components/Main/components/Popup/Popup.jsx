export default function Popup(props) {
  // se ha desestructurado onClose de props
  const { onClose, title, children } = props;

  return (
    <div className="popup">
      <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose} // llama a onClose al hacer clic en el botón
        />
        
        {title && <h3 className="popup__title">{title}</h3>}

        {children}
      </div>
    </div>
  );
}