
import { useState } from "react";
import Button from "../components/Button"

export default function Home() {
  
  const [buttonText, setButtonText] = useState("Start");

  return (
    <>
      <h1>Home</h1>
      <Button text={buttonText} />
    </>
  )
}
// La page Home est le parent du composant Button.
// Game ENVOIT à son enfant Target le nouveau texte du bouton.