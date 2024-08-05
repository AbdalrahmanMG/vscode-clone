import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrow from "./icons/RightArrow";
import DownArrow from "./icons/DownArrow";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setClickedFiles, setOpenedFiles } from "../app/features/FileTreeSlice";
import { RootState } from "../app/store";
import { doesFileObjExist } from "../utils/functions";
import AddFileInput from "./AddFileInput";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const {id, name, children, isFolder, content } = fileTree
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const {openedFiles} = useSelector((state: RootState)=> state.tree)

  // * handlers
  const toggleOpen = () => setOpen((prev) => !prev);

  const onFileClicked =()=>{
    const exist = doesFileObjExist(openedFiles, id)
    dispatch(setClickedFiles({ filename: name, fileContent: content, activeId:id }));
    if(exist) return
    dispatch(setOpenedFiles([...openedFiles, fileTree]))

  }

  return (
    <div className="mb-2 ml-2 min-w-40">
      <div className="flex items-center">
        {isFolder ? (
          <div className="flex items-center cursor-pointer" onClick={toggleOpen}>
            <span>{open ? <DownArrow /> : <RightArrow />}</span>
            <span className="mr-2">
            <RenderFileIcon filename={name} isOpen={open} isFolder={isFolder} />
            </span>
            <span>{name}</span>
          </div>
        ) : (
          <div className="flex items-center cursor-pointer" onClick={onFileClicked}>
            <span className="mr-2">
              <RenderFileIcon filename={name} />
            </span>
            <span>{name}</span>
          </div>
        )}
      </div>
      {open && children && children.map((file, idx) => <RecursiveComponent key={idx} fileTree={file} />)}
      <AddFileInput/>
    </div>
  );
};

export default RecursiveComponent;
