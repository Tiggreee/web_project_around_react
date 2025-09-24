import { useState, useEffect } from 'react';

export default function EditProfile() {
  const [name, setName] = useState("Renata Cousteau");
  const [description, setDescription] = useState("Exploradora");
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  const validate = (value, minLength, maxLength) => {
    if (!value.trim()) return "Please fill out this field.";
    if (value.length < minLength) return `Please lengthen this text to ${minLength} characters or more (you are currently using ${value.length} characters).`;
    if (value.length > maxLength) return `Please shorten this text to ${maxLength} characters or less (you are currently using ${value.length} characters).`;
    return "";
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(validate(value, 2, 40));
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
    setDescriptionError(validate(value, 2, 200));
  };

  useEffect(() => {
    setIsFormValid(!nameError && !descriptionError && name.trim() && description.trim());
  }, [nameError, descriptionError, name, description]);

  const handleSubmit = (e) => {
    e.preventDefault();
    isFormValid && console.log("Form submitted:", { name, description });
  };

  return (
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      <label className="popup__field">
        <input
          className={`popup__input ${nameError ? 'popup__input_type_error' : ''}`}
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          maxLength="40"
          minLength="2"
          required
        />
        <span className={`popup__error ${nameError ? 'popup__error_visible' : ''}`}>{nameError}</span>
      </label>
      <label className="popup__field">
        <input
          className={`popup__input ${descriptionError ? 'popup__input_type_error' : ''}`}
          value={description}
          onChange={handleDescriptionChange}
          placeholder="About me"
          maxLength="200"
          minLength="2"
          required
        />
        <span className={`popup__error ${descriptionError ? 'popup__error_visible' : ''}`}>{descriptionError}</span>
      </label>
      <button className={`button popup__button ${!isFormValid ? 'popup__button_disabled' : ''}`} disabled={!isFormValid}>
        Guardar
      </button>
    </form>
  );
}