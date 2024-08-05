import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IIntialState {
    sideBarFiles: IFile
}

const initialState: IIntialState ={
    sideBarFiles : {
        id: '',
        isFolder: false,
        name: '',
    }
}

export const sideBarFileSlice = createSlice({
    name:"sideFiles",
    initialState,
    reducers:{
        setSideBarFiles :(state, action : PayloadAction<IFile>)=>{
            state.sideBarFiles = action.payload
        }
    }
})
export const {setSideBarFiles } = sideBarFileSlice.actions

export default sideBarFileSlice.reducer