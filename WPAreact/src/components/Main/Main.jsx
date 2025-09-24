import { useState } from 'react';
import Card from './components/Card/Card'
import ImagePopup from './components/ImagePopup/ImagePopup'

// Mock data for cards as specified in the instructions
const initialCards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: true,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707df',
    name: 'Bald Mountains',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:12:58.324Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707e0',
    name: 'Latemar',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:13:58.324Z',
  },
  {
    isLiked: true,
    _id: '5d1f064ed321eb4bdcd707e1',
    name: 'Vanoise National Park',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:14:58.324Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707e2',
    name: 'Lago di Braies',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:15:58.324Z',
  }
];

function Main({ onImagePopup }) {
  const [cards, setCards] = useState(initialCards);

  function handleCardClick(card) {
    const imagePopup = { 
      title: null, // no title for image popup
      children: <ImagePopup card={card} />
    };
    onImagePopup(imagePopup);
  }

  function handleDeleteCard(cardToDelete) {
    setCards(cards => cards.filter(card => card._id !== cardToDelete._id));
  }

  return (
    <main className="grid">
      <ul className="cards__list">
        {cards.map((card) => (
          <Card 
            key={card._id} 
            card={card} 
            onCardClick={handleCardClick}
            onDelete={handleDeleteCard}
          />
        ))}
      </ul>
    </main>
  )
}

export default Main