import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesTab from "./OpenedFilesTab";
import OpenedFileContent from "./OpenedFileContent";

const OpenedFileBar = () => {
  const { openedFiles , clickedFile} = useSelector((state: RootState) => state.tree);

  return (
    <div>
      <div className="flex items-center">
        {openedFiles.map((file) => (
          <OpenedFilesTab key={file.id} file={file} />
        ))}
      </div>
      <OpenedFileContent content={clickedFile.fileContent}/>
    </div>
  );
};

export default OpenedFileBar;
