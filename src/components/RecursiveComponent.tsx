import { useState } from "react";
import { IFile } from "../interfaces";
import FileIcon from "./icons/FileIcon";
import FolderIcon from "./icons/FolderIcon";
import RightArrow from "./icons/RightArrow";
import DownArrow from "./icons/DownArrow";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree: { name, children, isFolder } }: IProps) => {
  const [open, setOpen] = useState(false);

  // * handlers
  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div className="mb-2 ml-2">
      <div className="flex items-center">
        {isFolder ? (
          <div className="flex items-center cursor-pointer" onClick={toggleOpen}>
            <span>{open ? <DownArrow /> : <RightArrow />}</span>
            <span className="mr-2">
              <FolderIcon />
            </span>
            <span>{name}</span>
          </div>
        ) : (
          <div className="flex items-center cursor-pointer">
            <span className="mr-2">
              <FileIcon />
            </span>
            <span>{name}</span>
          </div>
        )}
      </div>
      {open && children && children.map((file, idx) => <RecursiveComponent key={idx} fileTree={file} />)}
    </div>
  );
};

export default RecursiveComponent;
