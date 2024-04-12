import React from 'react'

const Welcome  = () => {
    const bonjour = () => console.log('Bonjour');
    const bonsoir = arg => console.log(arg);
    // const bonsoir = (arg) => console.log(arg); on peut l'écrire comme ca avec les ()
    
    
  return (
    <div>
        {/* {Invoquer une fonction "bonjour" qui affichera console.log ('Bonjour')} */}
        <button onClick={bonjour}>Invoquer une fonction</button>
        <br/>
      


        {/* {Invoquer une fonction "Bonsoir" avec un argument "Bonsoir"
    et l'afficher dans un console.log} */}
        <button onClick={() =>bonsoir("Bonsoir!")} >Invoquer une fonction avec arg "Bonsoir"</button>
        <br/>


        {/* {lancer le console.log("Bonne nuit")après le click sans invoquer de fonction} */}
        <button onClick={() =>console.log ("Bonne nuit !")}>Console log sur le bouton</button>
        <br/>
    </div>
  )
}

export default Welcome 
