import { IFile } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export const fileTree: IFile = {
  id: uuidv4(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuidv4(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: ".bin",
          isFolder: true,
          children: [{   id: uuidv4(),name: "acorn.tsx", isFolder: false }],
        },
        {
          id: uuidv4(),
          name: "text.txt",
          isFolder: false,
          content: "anything",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "index.html",
      isFolder: false,
      content: "anything",
    },
  ],
};
