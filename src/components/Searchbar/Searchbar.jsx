import React, { Component } from "react";
// import PropTypes from 'prop-types';
import Notiflix from 'notiflix';


export class Searchbar extends Component {
   state = {
   searchRequest:'',
};

   handleInputChange = event => {
      this.setState({ searchRequest: event.currentTarget.value.toLowerCase() });
      // console.log(this.state.searchRequest);
   };
   
   handleSubmitSearch = event => {
      event.preventDefault();
      if (this.state.searchRequest.trim() === '') {
         Notiflix.Notify.info("Please type search request.".toUpperCase());
         return;
      };
      this.props.FormSubmit(this.state.searchRequest);
      this.setState({ searchRequest:''});
      // console.log(this.state);

}
   
   render() {
      return (
   <header className="searchbar">
            <form
               className="form"
               onSubmit={this.handleSubmitSearch}        
>
   <button
      type="submit"
      className="button"
               >
      <span className="button-label">Search</span>
   </button>

    <input
      // class="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleInputChange}            
    />
  </form>
</header>   
      )
   };
     
}
