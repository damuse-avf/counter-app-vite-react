//import { Fragment } from "react"
//const newMessage = 'Fernando' //se recomienda sacar porque no se modificará
import PropTypes from 'prop-types'

const getResult = (a,b) => {
    return ( a+b );
}

const newMessage= {
    message: 'hola',
    tittle: 'Damaris'
};

//se recomienda poner afuera si no se van a modificar.
export const FirstApp = ( {tittle, subTittle} ) =>{
 //console.log(tittle);
 if(!tittle){
    throw new Error("titulo no existe")
 }
    return (
        //opciones para agregar más de un elemento
       /*  <div>
            <h1>first app damaris!</h1>
             <p> subt</p>
        </div> */
      /* <Fragment>
            <h1>first app damaris!</h1>
             <p> subt</p>
        </Fragment>*/
        // //<h1>{newMessage.tittle}</h1>
       //hacer esto es como usar un div pero que no afecta la pagina o como usar un Fragmento sin importar
       //<p>{getResult(1,2)}</p>
        <> 
    
         <h1> {tittle}</h1>
        
            <p> {subTittle }</p>
        </>
  


        ) 
}

FirstApp.propTypes = {
    tittle:PropTypes.string.isRequired,
    subTittle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    tittle: "No hay titulo"
}