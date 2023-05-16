import { Component } from "react";
// import Notiflix from 'notiflix';
import { Searchbar } from "./Searchbar/Searchbar";
// import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {

   state = {
      searchRequest: '',
      showModal: false,
      receivedData: [],
   };

   handleFormSubmit = (searchRequest) => {
      // console.log(searchRequest);
      this.setState({ searchRequest });
   };

   togleModal = () => {
      this.setState(state => ({
         showModal: !state.showModal}))
   }

   // handleReceivedData = (receivedData) => {
   //    this.setState({ receivedData });
   //    console.log(this.setState.receivedData)
   // }


   componentDidUpdate() {
      // if (this.state.contacts !== prevState.contacts) {
      //    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      // }   
      
   };

   componentDidMount() {
      // const storedContacts = localStorage.getItem('contacts');
      // const parsedContacts = JSON.parse(storedContacts);
      // console.log(parsedContacts);
      // this.setState({contacts:parsedContacts })
   }

   render() {
      const { searchRequest, showModal } = this.state;
         return (
            <>
               <Searchbar FormSubmit={this.handleFormSubmit} />
               
               <ImageGallery receivedData={this.handleReceivedData} searchRequest={searchRequest} />
               
            </>
            
         )
      };
   };

