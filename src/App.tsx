import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/FileTree";
import ResizablePanals from "./components/ResizablePanals";
import Preview from "./components/Preview";
import AddFileFolder from "./components/AddFileFolderIcons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSideBarFiles } from "./app/features/sideBarFilesSlice";
import { RootState } from "./app/store";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSideBarFiles(fileTree));
  }, []);

  const {sideBarFiles} = useSelector((state: RootState)=> state.side)

  return (
    <div className="flex h-screen">
      <ResizablePanals
        showLeftPanel={true}
        leftPanel={
          <div className="p-2 ">
            <AddFileFolder />
            <RecursiveComponent fileTree={sideBarFiles} />
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
