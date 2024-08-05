import { useSelector } from "react-redux";
import OpenedFileContent from "./OpenedFileContent";
import { RootState } from "../app/store";
import OpenedFileBar from "./OpenedFileBar";
import IconImg from "./IconImg";

const Preview = () => {
  const { clickedFile, openedFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div>
      {openedFiles.length >= 1 ? (
        <>
          <OpenedFileBar />
          <OpenedFileContent content={clickedFile.fileContent} />
        </>
      ) : (
        <div className="h-screen w-full flex justify-center items-center ">
          <IconImg src="icons/vscode.svg" className=" w-1/3" />
        </div>
      )}
    </div>
  );
};

export default Preview;
