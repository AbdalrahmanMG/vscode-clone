import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesTab from "./OpenedFilesTab";

const OpenedFileBar = () => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div>
      <ul className="flex items-center">
        {openedFiles.map((file) => (
          <OpenedFilesTab key={file.id} file={file} />
        ))}
      </ul>
    </div>
  );
};

export default OpenedFileBar;
