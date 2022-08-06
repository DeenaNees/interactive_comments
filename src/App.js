import "./App.css";
import { commentsData } from "./data.js";
import Comments from "./components/Comments";

function App() {
  return <Comments comments={commentsData.comments}></Comments>;
}

export default App;
