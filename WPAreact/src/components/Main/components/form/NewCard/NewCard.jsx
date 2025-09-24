import { useState, useEffect } from 'react';

export default function NewCard() {
  const [title, setTitle] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [titleError, setTitleError] = useState("");
  const [imageLinkError, setImageLinkError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Validar título
  const validateTitle = (value) => {
    if (!value.trim()) {
      return "Please fill out this field.";
    }
    if (value.length < 2) {
      return "Please lengthen this text to 2 characters or more (you are currently using " + value.length + " characters).";
    }
    if (value.length > 30) {
      return "Please shorten this text to 30 characters or less (you are currently using " + value.length + " characters).";
    }
    return "";
  };

  // Validar URL
  const validateImageLink = (value) => {
    if (!value.trim()) {
      return "Please fill out this field.";
    }
    try {
      new URL(value);
      return "";
    } catch {
      return "Please enter a valid URL.";
    }
  };

  // Manejar cambio de título
  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    setTitleError(validateTitle(value));
  };

  // Manejar cambio de URL
  const handleImageLinkChange = (e) => {
    const value = e.target.value;
    setImageLink(value);
    setImageLinkError(validateImageLink(value));
  };

  // Actualizar validez del formulario
  useEffect(() => {
    setIsFormValid(!titleError && !imageLinkError && title.trim() && imageLink.trim());
  }, [titleError, imageLinkError, title, imageLink]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Aquí se manejaría el envío del formulario
      console.log("New card submitted:", { title, imageLink });
      // Limpiar formulario después de envío
      setTitle("");
      setImageLink("");
      setTitleError("");
      setImageLinkError("");
    }
  };

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className={`popup__input popup__input_type_card-name ${titleError ? 'popup__input_type_error' : ''}`}
          id="card-name"
          maxLength="30"
          minLength="2"
          name="card-name"
          placeholder="Title"
          required
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
        <span className={`popup__error ${titleError ? 'popup__error_visible' : ''}`} id="card-name-error">
          {titleError}
        </span>
      </label>
      <label className="popup__field">
        <input
          className={`popup__input popup__input_type_url ${imageLinkError ? 'popup__input_type_error' : ''}`}
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
          value={imageLink}
          onChange={handleImageLinkChange}
        />
        <span className={`popup__error ${imageLinkError ? 'popup__error_visible' : ''}`} id="card-link-error">
          {imageLinkError}
        </span>
      </label>

      <button 
        className={`button popup__button ${!isFormValid ? 'popup__button_disabled' : ''}`}
        type="submit"
        disabled={!isFormValid}
      >
        Guardar
      </button>
    </form>
  );
}