export default function EditAvatar() {
  return (
    <form className="popup__form" noValidate>
      <label className="popup__field">
        <input className="popup__input" type="url" placeholder="Avatar link" required />
        <span className="popup__error"></span>
      </label>
      <button className="button popup__button">Guardar</button>
    </form>
  );
}