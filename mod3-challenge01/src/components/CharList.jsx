import { useState , useEffect} from "react";
import Char from "./Char";
import { getCharacters } from "../service";

const CharList = () => {
  const [charList, setCharList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => setCharList(data.results))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="page">
      {isLoading && <span className="loading-text">Loading</span>}
      <div className="imagen">
        <img src={image} alt="No hay imagen"></img>
      </div>
      {charList.map((char) => (
        <Char
          key={char.id}
          name={char.name}
          status={char.status}
          specie={char.species}
          imageUrl={char.image}
          setImage={setImage}
        ></Char>
      ))}
    </div>
  )
}

export default CharList;
