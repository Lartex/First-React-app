/* Shortcuts React

-rcc: Component skeleton
-imr: import react component 

*/

import React, { Component } from 'react'

export default class Search extends Component {

    render() {
        return (
           <form>
              <div className="row">
              <div className="form-group col-md-8">
                  <input type="text" className="form-control form-control-lg" placeholder="Busca tu Imagen.
                   Ejemplo: Futbol, Naturaleza, Playas"/>
                      </div> 
                  </div> 
           </form>
        )
    }
}


