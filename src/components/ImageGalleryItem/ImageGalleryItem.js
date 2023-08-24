import Modal from 'react-modal';
import React, { Component } from 'react';

import {
  ImageGalleryItemImage,
  ImageItemStyled,
  customStyles,
} from './ImageGalleryItem.styled';

Modal.setAppElement('#root');

// export const GalleryItemImage = ({ item, modal, openModal, closeModal }) => {
//   const { webformatURL, tags, largeImageURL,} = item;
//   return (
//     <div>
//       <ImageItemStyled key={id}>
//         <ImageGalleryItemImage
//           src={webformatURL}
//           alt={tags}
//           load="lazy"
//           onClick={openModal}
//         />
//         <Modal
//           isOpen={modal}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
//           <img src={largeImageURL} alt={tags} />
//         </Modal>
//       </ImageItemStyled>
//     </div>
//   );
// };

export class GalleryItemImage extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.item;
    return (
      <ImageItemStyled>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          load="lazy"
          onClick={this.openModal}
        />
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={largeImageURL} alt={tags} />
        </Modal>
      </ImageItemStyled>
    );
  }
}
