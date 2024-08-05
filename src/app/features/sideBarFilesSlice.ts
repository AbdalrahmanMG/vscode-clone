import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IIntialState {
    sideBarFiles: IFile, 
    selectedFolderId: string,
    showAddInput: boolean
}

const initialState: IIntialState ={
    sideBarFiles : {
        id: '',
        isFolder: false,
        name: '',
    },
    selectedFolderId: '',
    showAddInput: false
}

export const sideBarFileSlice = createSlice({
    name:"sideFiles",
    initialState,
    reducers:{
        setSideBarFiles :(state, action : PayloadAction<IFile>)=>{
            state.sideBarFiles = action.payload
        },
        setSelectedFolderId: (state, action :PayloadAction<string>)=>{
            state.selectedFolderId = action.payload
        },
        setShowAddInput: (state, action :PayloadAction<boolean>)=>{
            state.showAddInput = action.payload
        }
    }
})
export const {setSideBarFiles,setSelectedFolderId, setShowAddInput } = sideBarFileSlice.actions

export default sideBarFileSlice.reducer