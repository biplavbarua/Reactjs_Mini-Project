import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StackedMenu from "./components/stacked-menu";
import menus from "./components/stacked-menu/data";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* {Star - Rating Component} */}
      {/* <StarRating noOfStars={5}/> */}

      {/* Image Slider Component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={"10"} /> */}

      {/* Load More Products Component */}
      {/* <LoadMoreData /> */}

      {/* Stacked Menu Component */}
      <StackedMenu menus={menus}/>
    </div>
  );
}

export default App;