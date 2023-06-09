import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {

   state = {
      searchRequest: '',
   };

   handleFormSubmit = (searchRequest) => {
      this.setState({ searchRequest });
   };
     

   render() {
      const { searchRequest } = this.state;
         return (
            <>
            <Searchbar formSubmit={this.handleFormSubmit} />               
            <ImageGallery searchRequest={searchRequest} />               
            </>
            
         )
      };
   };

