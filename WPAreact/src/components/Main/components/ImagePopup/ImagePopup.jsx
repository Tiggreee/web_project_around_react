export default function ImagePopup(props) {
  const { name, link } = props.card;
  
  return (
    <>
      <img src={link} alt={name} className="popup__image" />
      <p className="popup__caption">{name}</p>
    </>
  );
}