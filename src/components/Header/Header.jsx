import { useContext } from 'react';
import logo from '/src/images/headerlogo.png';
import editButton from '/src/images/edit_button.png';
import addButton from '/src/images/add_button.png';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Header({ onEditProfile, onAddPlace, onEditAvatar }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="header">
      <img className="header__logo" src={logo} alt="Around Us Logo"/>
      <header className="header__info">
        <img className="header__pic" src={currentUser.avatar} alt={`Foto de perfil de ${currentUser.name}`} onClick={onEditAvatar}/>   
        <div className="header__block">
          <div className="header__row">
            <h1 className="header__title">{currentUser.name}</h1>
            <button className="header__edit" onClick={onEditProfile}>
              <img src={editButton} alt="Botón para editar el perfil"/>
            </button>
          </div>
          <h2 className="header__subtitle">{currentUser.about}</h2>
        </div>
        <button className="header__add" onClick={onAddPlace}>
          <img src={addButton} alt="Botón para agregar imágenes"/>
        </button>
      </header>
    </section>
  );
}