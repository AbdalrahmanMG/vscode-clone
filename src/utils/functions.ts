import { IFile } from "../interfaces";

export const doesFileObjExist = (array: IFile[], id: string)=>{
    return array.some(obj=> obj.id === id)
}