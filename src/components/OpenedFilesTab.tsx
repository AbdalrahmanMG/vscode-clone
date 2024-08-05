import { useDispatch } from "react-redux";
import { IFile } from "../interfaces";
import CloseIcon from "./icons/CloseIcon";
import RenderFileIcon from "./RenderFileIcon";
import { setClickedFiles } from "../app/features/FileTreeSlice";

interface IProps {
  file: IFile;
}

const OpenedFilesTab = ({ file }: IProps) => {
    const disptach = useDispatch()
    const handleClickedFile= ()=>{
        disptach(setClickedFiles({filename: file.name, fileContent: file.content}))
    }

  return (
    <div className=" flex items-center border-[1px] p-2" onClick={handleClickedFile}>
      <RenderFileIcon filename={file.name} />
      <span className="flex justify-center mx-1 items-center cursor-pointer">{file.name}</span>
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesTab;
