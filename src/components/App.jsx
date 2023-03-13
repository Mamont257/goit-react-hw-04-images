import React, {useState, useReducer} from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from "./ImageGallery/ImageGallery";

function counterReducer(prevState, action) {
  if (action.type === "plus") {
    return prevState + action.payload
  } else if (action.type === "start") {
    return 1
  }
}

export function App() {
  const [imagesName, setImagesName] = useState("");
  // const [page, setPage] = useState(1);
  const [page, setPage] = useReducer(counterReducer, 1)

  function handleSubmit(imageName) {
    setImagesName(imageName);
    setPage({type: 'start'});
  }

  // function handleClick() {
  //   setPage(prevState => prevState+1)
  // };

    return (
      <div>
        <Searchbar onSearch={handleSubmit} />
        <ToastContainer autoClose={2000} />
        <ImageGallery
          imageName={imagesName}
          page={page}
          handleClick={() => setPage({type: 'plus', payload: 1})}
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