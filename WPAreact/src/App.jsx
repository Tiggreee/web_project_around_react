import { useState } from 'react'
import logo from './images/logo.svg'
import avatar from './images/avatar.jpg'

function App() {
  return (
    <div className="page__content">
      <header className="header page__section">
        <img
          src={logo}
          alt="Around the U.S logo"
          className="logo header__logo"
        />
      </header>
      
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

      <footer className="footer page__section">
        <p className="footer__copyright">© 2021 Around The U.S.</p>
      </footer>
    </div>
  )
}

export default App
