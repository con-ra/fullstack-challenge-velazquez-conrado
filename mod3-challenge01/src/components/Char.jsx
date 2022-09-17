const Char = ({ name, species, status, imageUrl, setImage }) => {
  return (
    <div className="color-square" onClick={() => setImage(imageUrl)}>
      <img src={imageUrl} alt=""></img>
      <p>{name}</p>
      <p>{species}</p>
      <p>{status}</p>
    </div>
  );
};

export default Char;
