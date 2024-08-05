import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import CloseIcon from "./icons/CloseIcon";
import RenderFileIcon from "./RenderFileIcon";
import { setClickedFiles, setOpenedFiles, setTabIdToRemove } from "../app/features/FileTreeSlice";
import { RootState } from "../app/store";
import { memo } from "react";

interface IProps {
  file: IFile;
}

const OpenedFilesTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const {
    clickedFile: { activeId },
    openedFiles,
  } = useSelector((state: RootState) => state.tree);

  //* handlers
  const handleClickedFile = () => {
    dispatch(setClickedFiles({ filename: file.name, fileContent: file.content, activeId: file.id }));
    dispatch(setTabIdToRemove(file.id))
  };

  const handleContextMenu =()=>{
    dispatch(setTabIdToRemove(file.id))
  }

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    const filteredTabs = openedFiles.filter((f) => f.id !== file.id);
    const lastTab = filteredTabs[filteredTabs.length - 1];
    if (!lastTab) {
      dispatch(setOpenedFiles([]));
      dispatch(setClickedFiles({ filename: "", fileContent: "", activeId: null }));
      return;
    }
    const { id, name, content } = lastTab;
    dispatch(setOpenedFiles(filteredTabs));
    dispatch(setClickedFiles({ filename: name, fileContent: content, activeId: id }));
  };

  return (
    <div className={` flex items-center border-[1px] border-x-[0.1px] p-2 ${file.id === activeId ? "border-t-2 border-t-[#cf6ccf]" : "border-t-2"}`} onClick={handleClickedFile} onContextMenu={handleContextMenu}>
      <RenderFileIcon filename={file.name} />
      <span className="flex justify-center mx-1 items-center cursor-pointer">{file.name}</span>
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md" onClick={(e) => handleClick(e)}>
        <CloseIcon />
      </span>
    </div>
  );
};

export default memo(OpenedFilesTab);
