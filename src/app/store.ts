import { configureStore } from '@reduxjs/toolkit'
import fileTreeSlice from "./features/FileTreeSlice";
import sideFiles from "./features/sideBarFilesSlice";


export const store = configureStore({
  reducer: {
    tree: fileTreeSlice,
    side: sideFiles
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch