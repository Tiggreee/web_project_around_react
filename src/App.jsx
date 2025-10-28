import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Popup from './components/Main/components/Popup/Popup'
import NewCard from './components/Main/components/form/NewCard/NewCard'
import EditProfile from './components/Main/components/form/EditProfile/EditProfile'
import EditAvatar from './components/Main/components/form/EditAvatar/EditAvatar'
import { CurrentUserContext } from './contexts/CurrentUserContext'
import api from './utils/api'

function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.error('Error al cargar los datos del usuario:', err);
      });
  }, []);

  const handleUpdateUser = (data) => {
    api.setUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  const handleUpdateAvatar = (data) => {
    api.setUserAvatar(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  const handleOpenPopup = (popupType) => {
    let popupData;
    switch(popupType) {
      case 'newCard':
        popupData = { title: "Nuevo lugar", children: <NewCard /> };
        break;
      case 'editProfile':
        popupData = { title: "Editar perfil", children: <EditProfile /> };
        break;
      case 'editAvatar':
        popupData = { title: "Cambiar foto de perfil", children: <EditAvatar /> };
        break;
      default:
        popupData = null;
    }
    setPopup(popupData);
  };

  const handleClosePopup = () => {
    setPopup(null);
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}>
      <div className="page__content">
        <Header 
          onEditProfile={() => handleOpenPopup('editProfile')}
          onAddPlace={() => handleOpenPopup('newCard')}
          onEditAvatar={() => handleOpenPopup('editAvatar')}
        />
        <Main 
          onImagePopup={setPopup}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
        />
        <Footer />
        
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
