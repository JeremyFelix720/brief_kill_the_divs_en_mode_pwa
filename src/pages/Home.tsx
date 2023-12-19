
import Button from "../components/Button";

export default function Home() {
  
  // const [buttonText, setButtonText] = useState("Start");
  const buttonText = "Start" as string;

  return (
    <>
      <header>
        <h1>Démarrez une partie !</h1>
      </header>
      <Button text={buttonText} />
    </>
  )
}
// La page Home est le parent du composant Button.
// Game ENVOIT à son enfant Target le nouveau texte du bouton.