import "./App.css";
import Comments from "./components/Comments";
import { CommentsProvider, useComments } from "./context/CommentsContext";

function App() {
  return (
    <CommentsProvider>
      <Wrapper />;
    </CommentsProvider>
  );
}

const Wrapper = () => {
  const { comments } = useComments();
  return <Comments comments={comments} />;
};

export default App;
