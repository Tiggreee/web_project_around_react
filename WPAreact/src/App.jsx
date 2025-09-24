import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Popup from './components/Main/components/Popup/Popup'
import NewCard from './components/Main/components/form/NewCard/NewCard'
import EditProfile from './components/Main/components/form/EditProfile/EditProfile'
import EditAvatar from './components/Main/components/form/EditAvatar/EditAvatar'

function App() {
  const [popup, setPopup] = useState(null);

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
    <div className="page__content">
      <Header 
        onEditProfile={() => handleOpenPopup('editProfile')}
        onAddPlace={() => handleOpenPopup('newCard')}
        onEditAvatar={() => handleOpenPopup('editAvatar')}
      />
      <Main 
        onImagePopup={setPopup}
      />
      <Footer />
      
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </div>
  )
}

export default App
