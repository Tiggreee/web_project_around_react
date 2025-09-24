import { useState } from 'react';
import trashIcon from '../../../../images/trashbin.png';

export default function Card(props) {
  const { name, link, isLiked: initialIsLiked } = props.card;
  const { onCardClick } = props;
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  
  return (
    <li className="grid__item">
      <button type="button" className="grid__delete" aria-label="Eliminar">
        <img src={trashIcon} alt="Eliminar" className="grid__delete-icon" />
      </button>
      <img 
        className="grid__pic" 
        src={link} 
        alt={name}
        onClick={() => onCardClick && onCardClick(props.card)}
      />
      <div className="grid__item-row">
        <h2 className="grid__title">{name}</h2>
        <button
          className={`grid__like ${isLiked ? 'grid__like_active' : ''}`}
          type="button"
          aria-label="Me gusta"
          onClick={handleLikeClick}
        >
          <div className="grid__like-heart"></div>
        </button>
      </div>
    </li>
  );
}