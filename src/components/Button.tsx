import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// La page Button est l'enfant du composant Home.
// La props "text" de l'enfant RECOIT du parent Game le nouveau texte du bouton.
export default function Button(props: {text: string}) {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/game")
  }, [])


  return (
    <>
      <button type="button" onClick={handleClick}>{props.text}</button>
    </>
  )
}