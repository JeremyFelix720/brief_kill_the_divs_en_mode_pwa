import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// La props "numberOfClick" de l'enfant RECOIENT du parent Game le nouveau nombre de clics.
export default function Score(props: {numberOfClick: number, gameStatus: boolean}) {

  // const [firstTimeRecord, setFirstTimeRecord] = useState(Date.now());
  const firstTimeRecord = Date.now();
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const navigate = useNavigate();

  // Fonction qui s'execute quand le composant Score est créé :
  useEffect(()=>{

    setIntervalId(setInterval(() => {
      // Nombre de milisecondes écoulées depuis le début de la partie (état "timeElapsed").
      setTimeElapsed(Date.now() - firstTimeRecord);
    }, 120)) // Met à jour le temps écoulé toutes les 120 milisecondes.

  },[])
  
  // Fonction qui s'execute quand "props.gameStatus" est modifié :
  useEffect(() => {

    if(props.gameStatus === false) {

      console.log("Fin de la partie !");

      // Arrete le decompte.
      clearInterval(intervalId!); // Le "!" veut dire au compilateur que je suis sûr que cette variable n'est pas null ou undefined.
      
      navigate("/end");
    }

  }, [props.gameStatus])

  return (
    <>
      <div className="score">
        <div className="click">
          Nombre de clic(s) : {props.numberOfClick}/10 
        </div>
        <div className="time_elapsed">
          Temps écoulé : {timeElapsed} seconde(s)
        </div>
      </div>
    </>
  )
}