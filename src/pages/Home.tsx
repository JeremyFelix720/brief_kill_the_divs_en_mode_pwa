
import Button from "../components/Button";

export default function Home() {
  
  // const [buttonText, setButtonText] = useState("Start");
  const buttonText = "Commencer" as string;

  return (
    <>
      <header>
        <h1>Démarrez une partie !</h1>
        <p className="rules">Le but du jeu est de cliquer le plus rapidement possible sur les cibles qui apparaitront à l'écran.</p>
      </header>

      <div className="playground">
        <Button text={buttonText} />
      </div>
    </>
  )
}
// La page Home est le parent du composant Button.
// Game ENVOIT à son enfant Target le nouveau texte du bouton.