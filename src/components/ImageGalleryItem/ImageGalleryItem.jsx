import { Modal } from "components/Modal/Modal";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ImageGalItem, ImageGalItemImage } from "./ImageGalleryItem.styled";


export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    };

    toggleModal = () => {
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen,
        }));
    };

    render() {
        const {
        image: { webformatURL, largeImageURL, tags },
        } = this.props;
 
    return (
      <ImageGalItem>
        <ImageGalItemImage onClick={this.toggleModal} src={webformatURL} alt={tags} />
        {this.state.isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            toggleModal={this.toggleModal}
          />
        )}
      </ImageGalItem>
    );
    }
}


ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }).isRequired,
};
