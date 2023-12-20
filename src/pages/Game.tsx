import Target from "../components/Target";
import Score from "../components/Score";
import { useEffect, useState } from "react";

const target_sound = new Audio("/assets/sounds/sonic_ring.mp3");

export default function Game() {

  const [nbClick, setNbClick] = useState(0);
  const [gameStatus, setGameStatus] = useState(true);

  const [topPosition, setTopPosition] = useState("0px");
  const [leftPosition, setLeftPosition] = useState("0px");
  
  useEffect(()=>{
    setGameStatus(true);
  }, [])

  function getRandomTopPosition() {
    return Math.floor(Math.random() * 100);
  }

  function getRandomLeftPosition() {
    return Math.floor(Math.random() * 100);
  }

  const handleClickTarget = () => {

    // Gestion du buitage
    target_sound.pause();
    target_sound.currentTime = 0;  // Remise à zéro seconde de la bande son
    target_sound.play();

    // Gestion de la vibration
    if(window.navigator.vibrate){
      window.navigator.vibrate(200); // Vibration de l'appareil pendant 200ms.
      // window.navigator.vibrate([200, 100, 200]); // Vibration de l'appareil pendant 200ms, puis pause de 100ms, puis nouvelle vibration pendant 200ms.
    }

    if(nbClick === 9) {
      setGameStatus(false);
      setNbClick(nbClick + 1);
    } else {
      setNbClick(nbClick + 1);
    }

    setTopPosition(getRandomTopPosition().toString() + "%");
    setLeftPosition(getRandomLeftPosition().toString() + "%");
  };

  return (
    <>
      <header>
        <h1>Kill the Divs !</h1>
        <Score numberOfClick={nbClick} gameStatus={gameStatus} />
      </header>
      
      <div className="playground">
        <Target onClick={handleClickTarget} top={topPosition} left={leftPosition} />
      </div>
    </>
  )
}
// La page Game est le parent des composants Target et Score
// Game RECOIT de son enfant Target l'info que l'élément a été cliqué.
// Game ENVOIT à son enfant Target les nouvelles positions top et left.