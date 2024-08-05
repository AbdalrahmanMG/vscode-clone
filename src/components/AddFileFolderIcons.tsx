import { useDispatch, useSelector } from "react-redux";
import IconImg from "./IconImg";
import { RootState } from "../app/store";
import { IFile } from "../interfaces";
import { setShowAddInput } from "../app/features/sideBarFilesSlice";

const AddFileFolder = () => {
  const {selectedFolderId, sideBarFiles} = useSelector((state: RootState)=> state.side)
  //* handlers
  const dispatch = useDispatch()
  const findFolderById= (node: IFile, id: string): IFile| null=>{
    if(node.id === id && node.isFolder){
      return node
    }
    if (node.children){
      for(const child of node.children){
        const result = findFolderById(child,id)
        if(result){
          return result
        }
      }
    }
    return null;
  }

  const onCreatingNewFile = () => {
    console.log('creating ');
    const selectedFolder = findFolderById(sideBarFiles, selectedFolderId)
    if(selectedFolder){
      console.log("Selected Folder:", selectedFolder);
    }
    dispatch(setShowAddInput(true))
  };

  return (
    <div className="flex justify-end gap-2">
      <IconImg src="icons/file-plus.svg" className="cursor-pointer" onClick={onCreatingNewFile} />
      <IconImg src="icons/folder-plus1.svg" className="cursor-pointer" />
    </div>
  );
};

export default AddFileFolder;
