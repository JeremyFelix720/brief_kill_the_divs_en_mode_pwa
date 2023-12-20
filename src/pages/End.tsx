import Button from "../components/Button"
import { useLocation } from "react-router-dom";

export default function End() {
  
  const location = useLocation();

  // Le composant End RECOIT du composant Score le "totalElapsedTime" (le temps total écoulé).
  // const [totalElapsedTime, setTotalElapsedTime] = useState(location.state?.totalTimeElapsed || 0);
  const totalElapsedTime = location.state?.totalTimeElapsed || 0;

  // Le texte du bouton est réinitialisé en "Restart".
  // const [buttonText, setButtonText] = useState("Restart");
  const buttonText = "Restart";

  return (
    <>
      <header>
        <h1>Résultat de la partie</h1>
      </header>
      <h2>Temps total effectué : {totalElapsedTime} secondes.</h2>
      <Button text={buttonText} />
    </>
  )
}