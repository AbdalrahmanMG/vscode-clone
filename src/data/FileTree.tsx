import { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".bin",
          isFolder: true,
          children: [{ name: "acorn.cmd", isFolder: false }],
        },
      ],
    },
    {
      name: "index.html",
      isFolder: false,
      content: "anything",
    },
  ],
};