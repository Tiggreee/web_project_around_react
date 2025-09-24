import { useState } from 'react'
import avatar from '../../images/avatar.jpg'

// Mock data for cards as specified in the instructions
const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  }
];

console.log(cards);

function Main() {
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image" style={{backgroundImage: `url(${avatar})`}}></div>
        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            aria-label="Edit profile"
            className="profile__edit-button"
            type="button"
          ></button>
          <p className="profile__description">Explorer</p>
        </div>
        <button
          aria-label="Add card"
          className="profile__add-button"
          type="button"
        ></button>
      </section>

      <section className="places page__section">
        <ul className="cards__list">
          {/* Cards will be rendered here */}
        </ul>
      </section>
    </main>
  )
}

export default Main