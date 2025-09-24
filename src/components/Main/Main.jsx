import { useState } from 'react';
import Card from './components/Card/Card'
import ImagePopup from './components/ImagePopup/ImagePopup'

const initialCards = [
  { isLiked: false, _id: '1', name: 'Yosemite Valley', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg' },
  { isLiked: true, _id: '2', name: 'Lake Louise', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg' },
  { isLiked: false, _id: '3', name: 'Bald Mountains', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg' },
  { isLiked: false, _id: '4', name: 'Latemar', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg' },
  { isLiked: true, _id: '5', name: 'Vanoise National Park', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg' },
  { isLiked: false, _id: '6', name: 'Lago di Braies', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg' }
];

function Main({ onImagePopup }) {
  const [cards, setCards] = useState(initialCards);

  const handleCardClick = (card) => onImagePopup({ title: null, children: <ImagePopup card={card} /> });
  const handleDeleteCard = (cardToDelete) => setCards(cards => cards.filter(card => card._id !== cardToDelete._id));

  return (
    <main className="grid">
      <ul className="cards__list">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={handleCardClick} onDelete={handleDeleteCard} />
        ))}
      </ul>
    </main>
  );
}

export default Main