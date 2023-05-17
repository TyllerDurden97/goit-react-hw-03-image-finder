import { Component } from 'react';
// import PropTypes from 'prop-types';
// import Notiflix from 'notiflix';
// import axios from 'axios';
import { fetchAPI } from '../../services/fetchAPI';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem'
import css from 'components/ImageGallery/ImageGallery.module.css';
import { Modal } from 'components/Modal/Modal';


export class ImageGallery extends Component {
   state = {
      receivedData: [],
      error: null,
      status: 'idle',
      page: 1,
      showModal: false,

   }

   componentDidUpdate(prevProps, prevState) {
      const prevSearchRequest = prevProps.searchRequest;
      const nextSearchRequest = this.props.searchRequest;
      const { page } = this.state;
      // console.log(nextSearchRequest);
      if (nextSearchRequest !== prevSearchRequest || prevState.page !== page) {
         this.setState({ status: 'pending' });
         setTimeout(() => {
         fetchAPI.fetchPixabay(nextSearchRequest, page)
            .then(resp => {
               this.setState((prevState) => ({
                  receivedData: [...prevState.receivedData, ...resp.hits],
                  status: 'resolved'
               }))
               // console.log(resp)
               // this.props.receivedData(this.state.receivedData);

               })
               .catch(error => this.setState({ error, status: 'rejected' }))
         }, 2000);
      }
      if (nextSearchRequest !== prevSearchRequest) {
          this.setState({ receivedData: [], page: 1 });
      }
     }

    hadleBtnLoadMore = (event) => {
       this.setState(prevState => ({ page: prevState.page + 1 }));
      //  event.scrollIntoViewscrollIntoView({ block: "end", behavior: "smooth" });
   }
   togleModal = () => {
      this.setState(state => ({
         showModal: !state.showModal}))
   }

   render() {
      const { receivedData, error, status, showModal } = this.state;

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
         className={css.imageGallery}>
         {receivedData.map(({ id, webformatURL, largeImageURL, tags }) => (
         <ImageGalleryItem key={id} OpenCloseModal={this.togleModal} webformatURL={webformatURL} tags={tags} />
         ))}
         </ul>
            {receivedData.length >= 12 && <Button onClick={this.hadleBtnLoadMore} />}
            {showModal && (<Modal onClose={this.togleModal}>
               {/* <img src={largeImageURL} alt={tags} /> */}
            </Modal >)}
         </>
         )
         }
   }
}

// largeImageURL={largeImageURL} tags={tags}