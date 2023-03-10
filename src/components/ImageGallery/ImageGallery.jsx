import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import React, { Component, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ImageGal } from "./ImageGallery.styled";
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";


export function ImageGallery(props) {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isButton, setIsButton] = useState(false);
    const [isNew, setIsNew] = useState(false);
    // console.log(props.page);


    useEffect(() => {
        const { imageName, page } = props;

        // console.log(imageName);
        // if (prevProps.imageName !== imageName || prevProps.page !== page) {
        //     this.setState({ isLoading: true, images: [] });
        //     this.fetchImages(imageName, page, prevState);
        // }
        setIsLoading(true)
        setImages([])
        fetchImages(imageName,page)
        // if (prevProps.imageName !== imageName) {
        //     this.setState({ isNew: true})
        // }
    }, [props])



    async function fetchImages(imageName, page, prevState) {
        const BASE_URL = 'https://pixabay.com/api/';
        const KEY = '32844399-402b025363825ff7850242d10';

        await fetch(`${BASE_URL}?key=${KEY}&q=${imageName}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`).then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status);
            }
            return resp.json();
        }).then(images => {
            if (!images.total) {
                setImages([])
                setIsButton(false)
                // this.setState({ images: [], isButton: false})
                return toast.error('Bad request')
            } else {
                setImages(images.hits);
                setIsButton(true);
            }

            // if (this.state.isNew) {
            //     this.setState({ images: images.hits, isButton: true, isNew: false })
            // } else {
            //     this.setState({ images: [...prevState.images, ...images.hits], isButton: true })
            // }


            setIsButton(images.hits.length === 12)

            // this.setState({
            //     isButton: images.hits.length === 12,
            // });

        }).finally(
            setIsLoading(false)
            // this.setState({isLoading: false})
        )
    }






    return (
        <div>
            {isLoading && <Loader/>}
            <ImageGal>
                {images.map(image => {
              return <ImageGalleryItem key={image.id} image={image} />;
            })}
            </ImageGal>
            {isButton && <Button nextPage={props.handleClick} />}
        </div>
        )
}










// export class ImageGallery extends Component {
//     state = {
//         images: [],
//         isLoading: false,
//         isButton: false,
//         isNew: false,
//     }

//     async componentDidUpdate(prevProps, prevState) {     
//         const { imageName, page } = this.props;

//         if (prevProps.imageName !== imageName || prevProps.page !== page) {
//             await this.setState({ isLoading: true, images: [] });
//                 this.fetchImages(imageName, page, prevState);
//         }

//         if (prevProps.imageName !== imageName) {
//             this.setState({ isNew: true})
//         }
//     }

//     async fetchImages(imageName, page, prevState) {
//         const BASE_URL = 'https://pixabay.com/api/';
//         const KEY = '32844399-402b025363825ff7850242d10';

//         await fetch(`${BASE_URL}?key=${KEY}&q=${imageName}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`).then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.status);
//             }
//             return resp.json();
//         }).then(images => {
//             if (!images.total) {
//                 this.setState({ images: [], isButton: false})
//                 return toast.error('Bad request')
//             }
//             if (this.state.isNew) {
//                 this.setState({ images: images.hits, isButton: true, isNew: false })
//             } else {
//                 this.setState({ images: [...prevState.images, ...images.hits], isButton: true })
//             }

//             this.setState({
//                 isButton: images.hits.length === 12,
//             });

//         }).finally(
//             this.setState({isLoading: false})
//         )
//     }

//     render() {
//         const { images, isLoading, isButton } = this.state;
//         const { handleClick } = this.props;
//         return (
//         <div>
//             {isLoading && <Loader/>}
//             <ImageGal>
//                 {images.map(image => {
//               return <ImageGalleryItem key={image.id} image={image} />;
//             })}
//             </ImageGal>
//             {isButton && <Button nextPage={handleClick} />}
//         </div>
//         )
//     }
// }


ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};