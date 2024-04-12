import React from 'react'

const MyHeader = ({myStyle, children}) =>
    <h1 style ={{color: myStyle}}>{children}</h1>
//   ici on peut ne pas mettre de return car il n'y a qu'un seul élément, si on en a plus de 2, on met un return


export default MyHeader
