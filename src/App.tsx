import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/FileTree";
import ResizablePanals from "./components/ResizablePanals";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="flex h-screen">
      <ResizablePanals
        showLeftPanel={true}
        leftPanel={
          <div className="w-60 p-2 ">
            <RecursiveComponent fileTree={fileTree} />
          </div>
        }
        rightPanel={
          <div className="flex-grow">
            <Preview />
          </div>
        }
      />
    </div>
  );
}

export default App;
