import { isUserValid } from "../../js/validations/isUserValid.js";
import { insertMainHeader as menu } from "../../modules/header/header.js";
import { leerInputsFormulario } from "./leerInputFormulario.js";
import { ejecutarObjetos } from "./objetos.js";
ejecutarObjetos();

menu( document.getElementById ("header") );

const registerForm = document.getElementById("contactForm");

registerForm.addEventListener( "submit", ( e )=>{
    e.preventDefault(); //evita que se envie el formulario
    console.log("Manejo del formulario");
    //console.log( e );


    // Obtener los datos del formulario.
     const newUser = leerInputsFormulario( registerForm );
     const validatedUser = isUserValid( newUser );
      //Validar los datos
      if(validatedUser.isValid){

      } else { 
        alert( validatedUser.errors.join("\n") );
      }

     console.log( newUser);

    // Validar datos

    // Si los datos son válidos enviar el formulario
        // - Usando la api fetch al servidor, con el método POST enviar el formulario
            // = Enviar un mensaje al usuario, limpiar el formulario, redirigir la página

            // = Enviar al usuario el error del servidor
    // Si los datos no son válidos enviar un mensaje al usuario
} );
