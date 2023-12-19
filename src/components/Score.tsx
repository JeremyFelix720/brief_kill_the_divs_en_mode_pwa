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

      // Création d'une notification
      const notification_icon = "../../public/icons/icon-144x144.png";
      const notification_text = "Votre temps est de : " + timeElapsed + " milisecondes";

      // Gestion de l'autorisation de la notification
      Notification.requestPermission().then((permission) => {
        // Si l'utilisateur accepte, créons une notification
        if (permission === "granted") {
          new Notification("Partie terminée !", {
            body: notification_text,
            icon: notification_icon,
          });
          setTimeout(() => {
            // Au moment de changer de page, le state ENVOIT à la page ciblée End "finalTimeElapsed" (le temps final écoulé).
            navigate("/end", { state: { totalTimeElapsed: timeElapsed } });
          }, 4000)
        }
        else {
          // Au moment de changer de page, le state ENVOIT à la page ciblée End "finalTimeElapsed" (le temps final écoulé).
          navigate("/end", { state: { totalTimeElapsed: timeElapsed } });
        }
      });
    }

  }, [props.gameStatus])

  return (
    <>
      <div className="score">
        <div className="click">
          Nombre de clic(s) : {props.numberOfClick}/10 
        </div>
        <div className="time_elapsed">
          Temps écoulé : {timeElapsed} miliseconde(s)
        </div>
      </div>
    </>
  )
}