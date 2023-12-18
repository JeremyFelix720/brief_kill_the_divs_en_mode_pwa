import Target from "../components/Target"
import Score from "../components/Score"
import { useState } from "react";


export default function Game() {

  const [nbClick, setNbClick] = useState(0)
  const [topPosition, setTopPosition] = useState("0px")
  const [leftPosition, setLeftPosition] = useState("0px")
  

  function getRandomTopPosition() {
    return Math.floor(Math.random() * 100);
  }

  function getRandomLeftPosition() {
    return Math.floor(Math.random() * 100);
  }

  const handleClickTarget = () => {
    setNbClick(nbClick + 1);

    setTopPosition(getRandomTopPosition().toString() + "%");
    setLeftPosition(getRandomLeftPosition().toString() + "%");
  };

  return (
    <>
      <header>
        <h1>Game</h1>
        <Score numberOfClick={nbClick}/>
      </header>
      
      <div className="playground">
        <Target onClick={handleClickTarget} top={topPosition} left={leftPosition} />
      </div>
    </>
  )
}
// La page Game est le parent du composant Target
// Game RECOIT de son enfant Target l'info que l'élément a été cliqué.
// Game ENVOIT à son enfant Target la nouvelle position top et left.