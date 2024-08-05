import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/FileTree";
import OpenedFileBar from "./components/OpenedFileBar";

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-60 border-r p-2 border-b-[1px] border-[#c9c9c983]">
        <RecursiveComponent fileTree={fileTree} />
      </div>
      <div>
        <OpenedFileBar />
      </div>
    </div>
  );
}

export default App;
