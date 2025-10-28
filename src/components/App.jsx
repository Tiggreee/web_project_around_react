import { useState, useEffect } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Popup from './Main/components/Popup/Popup'
import NewCard from './Main/components/form/NewCard/NewCard'
import EditProfile from './Main/components/form/EditProfile/EditProfile'
import EditAvatar from './Main/components/form/EditAvatar/EditAvatar'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import api from '../utils/api'

function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => {
        console.error('Error al cargar los datos:', err);
      });
  }, []);

  const handleUpdateUser = (data) => {
    api.updateUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  const handleUpdateAvatar = (data) => {
    api.updateAvatar(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  const handleCardLike = async (card) => {
    const isLiked = card.isLiked;
    
    await api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
      })
      .catch((error) => console.error(error));
  };

  const handleCardDelete = async (card) => {
    await api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
      })
      .catch((error) => console.error(error));
  };

  const handleAddPlaceSubmit = (cardData) => {
    api.addCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
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
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit }}>
      <div className="page__content">
        <Header 
          onEditProfile={() => handleOpenPopup('editProfile')}
          onAddPlace={() => handleOpenPopup('newCard')}
          onEditAvatar={() => handleOpenPopup('editAvatar')}
        />
        <Main 
          cards={cards}
          onImagePopup={setPopup}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
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
