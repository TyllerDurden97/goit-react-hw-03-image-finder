import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import Notiflix from 'notiflix';
import css from 'components/Modal/Modal.module.css';


export class Modal extends Component { 

   componentDidMount() {
   
   };

   componentWillUnmount() {

   }

   render() {
      return (
         <div className={css.overlay}>
            <div className={css.modal}>{ this.props.children}</div>
</div>
      )
   }
}






// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()