import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <>
      <RecursiveComponent fileTree={fileTree}/>
    </>
  );
}

export default App;
