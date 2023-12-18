import { useEffect, useState } from "react";

export default function Score(props: {numberOfClick: number}) {
  
  const [chrono, setChrono] = useState(0);

  useEffect(() => {
    
  }, [])

  return (
    <>
      <div className="score">
        <div className="click">
          Nombre de clic(s) : {props.numberOfClick}/10 
        </div>
        <div className="chrono">
          Temps écoulé : {chrono} seconde(s)
        </div>
      </div>
    </>
  )
}