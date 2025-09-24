import { useState } from 'react';
import trashIcon from '/src/images/trashbin.png';

export default function Card({ card, onCardClick, onDelete }) {
  const { name, link, isLiked: initialIsLiked } = card;
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  
  return (
    <li className="grid__item">
      <button className="grid__delete" onClick={() => onDelete?.(card)}>
        <img src={trashIcon} alt="Eliminar" className="grid__delete-icon" />
      </button>
      <img className="grid__pic" src={link} alt={name} onClick={() => onCardClick?.(card)} />
      <div className="grid__item-row">
        <h2 className="grid__title">{name}</h2>
        <button className={`grid__like ${isLiked ? 'grid__like_active' : ''}`} onClick={() => setIsLiked(!isLiked)}>
          <div className="grid__like-heart"></div>
        </button>
      </div>
    </li>
  );
}