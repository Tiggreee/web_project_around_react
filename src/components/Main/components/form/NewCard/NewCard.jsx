import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../../../../contexts/CurrentUserContext';

export default function NewCard() {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const [title, setTitle] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [titleError, setTitleError] = useState("");
  const [imageLinkError, setImageLinkError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateTitle = (value) => {
    if (!value.trim()) return "Por favor llena este campo.";
    if (value.length < 2) return `El texto debe tener al menos 2 caracteres (actualmente tienes ${value.length}).`;
    if (value.length > 30) return `El texto no debe exceder 30 caracteres (actualmente tienes ${value.length}).`;
    return "";
  };

  const validateImageLink = (value) => {
    if (!value.trim()) return "Por favor llena este campo.";
    try { new URL(value); return ""; } catch { return "Por favor ingresa una URL válida."; }
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    setTitleError(validateTitle(value));
  };

  const handleImageLinkChange = (e) => {
    const value = e.target.value;
    setImageLink(value);
    setImageLinkError(validateImageLink(value));
  };

  useEffect(() => {
    setIsFormValid(!titleError && !imageLinkError && title.trim() && imageLink.trim());
  }, [titleError, imageLinkError, title, imageLink]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      handleAddPlaceSubmit({ name: title, link: imageLink });
      setTitle("");
      setImageLink("");
      setTitleError("");
      setImageLinkError("");
    }
  };

  return (
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      <label className="popup__field">
        <input
          className={`popup__input ${titleError ? 'popup__input_type_error' : ''}`}
          value={title}
          onChange={handleTitleChange}
          placeholder="Título"
          maxLength="30"
          minLength="2"
          required
        />
        <span className={`popup__error ${titleError ? 'popup__error_visible' : ''}`}>{titleError}</span>
      </label>
      <label className="popup__field">
        <input
          className={`popup__input ${imageLinkError ? 'popup__input_type_error' : ''}`}
          type="url"
          value={imageLink}
          placeholder="Enlace de imagen"
          onChange={handleImageLinkChange}
          required
        />
        <span className={`popup__error ${imageLinkError ? 'popup__error_visible' : ''}`}>{imageLinkError}</span>
      </label>
      <button className={`button popup__button ${!isFormValid ? 'popup__button_disabled' : ''}`} disabled={!isFormValid}>
        Guardar
      </button>
    </form>
  );
}