import { Component } from 'react';
// import PropTypes from 'prop-types';
// import Notiflix from 'notiflix';
// import axios from 'axios';
import { fetchAPI } from '../../services/fetchAPI';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem'



export class ImageGallery extends Component {
   state = {
      receivedData: [],
      error: null,
      status: 'idle',
      page: 1,
   }

   componentDidUpdate(prevProps, prevState) {
      const prevSearchRequest = prevProps.searchRequest;
      const nextSearchRequest = this.props.searchRequest;
      const { page } = this.state;
      console.log(nextSearchRequest);
      if (nextSearchRequest !== prevSearchRequest || prevState.page !== page) {
         this.setState({ status: 'pending' });
         setTimeout(() => {
         fetchAPI.fetchPixabay(nextSearchRequest, page)
            .then(resp => {
               this.setState((prevState) => ({
                  receivedData: [...prevState.receivedData, ...resp.hits],
                  status: 'resolved'
               }))
               //  this.props.receivedData(this.state.receivedData);
                  // console.log(prevState.receivedData)
               })
               .catch(error => this.setState({ error, status: 'rejected' }))
         }, 2000);
      }
     }

    hadleBtnLoadMore = () => {
      // let page = this.state.page;
      this.setState(prevState => ({ page: prevState.page + 1 }));
   }

   render() {
      const { receivedData, error, status } = this.state;

      if (status === 'idle') {
         return <div>Please type search request</div>
      }
      if (status === 'pending') {
         return <Loader/>

      }
      if (status === 'rejected') {
         return console.log(error.message)
      }
      if (status === 'resolved') {
         return (<>         
          <ul
         className="gallery">
         {receivedData.map(({ id, webformatURL, largeImageURL, tags }) => (
         <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
         
         ))}
         </ul>
            <Button onClick={this.hadleBtnLoadMore} />
         </>)
         }
   }
}