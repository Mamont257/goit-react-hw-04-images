import React, {useState} from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from "./ImageGallery/ImageGallery";



export function App() {
  const [imagesName, setImagesName] = useState("");
  const [page, setPage] = useState(1);

  function handleSubmit(imageName) {
    setImagesName(imageName);
    setPage(1);
  }

  function handleClick() {
    setPage(prevState => prevState+1)
  };

    return (
      <div>
        <Searchbar onSearch={handleSubmit} />
        <ToastContainer autoClose={2000} />
        <ImageGallery
          imageName={imagesName}
          page={page}
          handleClick={handleClick}
        />
      </div>
    )
}












// export class App extends Component {
//   state = {
//     imageName: "",
//     page: 1,
//   }

  // handleSubmit = (imageName) => {
  //   this.setState({imageName, page: 1})
  // }

//   handleClick = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { imageName, page } = this.state;

//     return (
//       <div>
//         <Searchbar onSearch={this.handleSubmit} />
//         <ToastContainer autoClose={2000} />
//         <ImageGallery
//           imageName={imageName}
//           page={page}
//           handleClick={this.handleClick}
//         />
//       </div>
//     )
//   }
// }