import { useState, useEffect } from 'react';

export default function NewCard() {
  const [title, setTitle] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [titleError, setTitleError] = useState("");
  const [imageLinkError, setImageLinkError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateTitle = (value) => {
    if (!value.trim()) return "Please fill out this field.";
    if (value.length < 2) return `Please lengthen this text to 2 characters or more (you are currently using ${value.length} characters).`;
    if (value.length > 30) return `Please shorten this text to 30 characters or less (you are currently using ${value.length} characters).`;
    return "";
  };

  const validateImageLink = (value) => {
    if (!value.trim()) return "Please fill out this field.";
    try { new URL(value); return ""; } catch { return "Please enter a valid URL."; }
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
      console.log("New card submitted:", { title, imageLink });
      setTitle(""); setImageLink(""); setTitleError(""); setImageLinkError("");
    }
  };

  return (
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      <label className="popup__field">
        <input
          className={`popup__input ${titleError ? 'popup__input_type_error' : ''}`}
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
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
          placeholder="Image link"
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