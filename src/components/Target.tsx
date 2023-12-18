
// La page Target est l'enfant du composant Game.
// La props "onClick" de l'enfant ENVOIT l'info au parent Game qu'il a été cliqué.
// Les props "top" et "left" de l'enfant RECOIENT du parent Game les nouvelles positions top et left.
export default function Target(props: { onClick: () => void , top: string, left: string}) {
  return (
    <>
      <div 
        className="target" 
        onClick={props.onClick}
        style={{top: props.top, left: props.left }}
      />
    </>
  )
}