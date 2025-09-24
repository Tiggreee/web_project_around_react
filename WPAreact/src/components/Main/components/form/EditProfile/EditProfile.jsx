import { useState, useEffect } from 'react';

export default function EditProfile() {
  const [name, setName] = useState("Renata Cousteau");
  const [description, setDescription] = useState("Exploradora");
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  // Validar nombre
  const validateName = (value) => {
    if (!value.trim()) {
      return "Please fill out this field.";
    }
    if (value.length < 2) {
      return "Please lengthen this text to 2 characters or more (you are currently using " + value.length + " characters).";
    }
    if (value.length > 40) {
      return "Please shorten this text to 40 characters or less (you are currently using " + value.length + " characters).";
    }
    return "";
  };

  // Validar descripción
  const validateDescription = (value) => {
    if (!value.trim()) {
      return "Please fill out this field.";
    }
    if (value.length < 2) {
      return "Please lengthen this text to 2 characters or more (you are currently using " + value.length + " characters).";
    }
    if (value.length > 200) {
      return "Please shorten this text to 200 characters or less (you are currently using " + value.length + " characters).";
    }
    return "";
  };

  // Manejar cambio de nombre
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(validateName(value));
  };

  // Manejar cambio de descripción
  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
    setDescriptionError(validateDescription(value));
  };

  // Actualizar validez del formulario
  useEffect(() => {
    setIsFormValid(!nameError && !descriptionError && name.trim() && description.trim());
  }, [nameError, descriptionError, name, description]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Aquí se manejaría el envío del formulario
      console.log("Form submitted:", { name, description });
    }
  };

  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className={`popup__input popup__input_type_name ${nameError ? 'popup__input_type_error' : ''}`}
          id="profile-name"
          maxLength="40"
          minLength="2"
          name="name"
          placeholder="Name"
          required
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <span className={`popup__error ${nameError ? 'popup__error_visible' : ''}`} id="profile-name-error">
          {nameError}
        </span>
      </label>
      <label className="popup__field">
        <input
          className={`popup__input popup__input_type_description ${descriptionError ? 'popup__input_type_error' : ''}`}
          id="profile-description"
          maxLength="200"
          minLength="2"
          name="description"
          placeholder="About me"
          required
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className={`popup__error ${descriptionError ? 'popup__error_visible' : ''}`} id="profile-description-error">
          {descriptionError}
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