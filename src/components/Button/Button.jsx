import React from "react";
// import PropTypes from 'prop-types';
// import css from 'components/Filter/Filter.module.css';

export const Button = ({ onClick }) => (
   <button         
            type="button"
            onClick={onClick}
      // {/* className={css.filterInpt} */}
   >
      Load more         
   </button>
)


// Button.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };