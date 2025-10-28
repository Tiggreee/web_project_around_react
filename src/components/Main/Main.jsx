import { useState, useEffect, useContext } from 'react';
import Card from './components/Card/Card'
import ImagePopup from './components/ImagePopup/ImagePopup'
import api from '../../utils/api'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Main({ onImagePopup }) {
  const [cards, setCards] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error('Error al cargar las tarjetas:', err);
      });
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id);
    
    await api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
      })
      .catch((error) => console.error(error));
  }

  const handleCardClick = (card) => onImagePopup({ title: null, children: <ImagePopup card={card} /> });

  return (
    <main className="grid">
      <ul className="cards__list">
        {cards.map((card) => (
          <Card 
            key={card._id} 
            card={card} 
            onCardClick={handleCardClick} 
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main