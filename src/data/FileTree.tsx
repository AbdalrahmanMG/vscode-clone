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
          children: [{ name: "acorn.tsx", isFolder: false }],
        },
        {
          name: "text.txt",
          isFolder: false,
          content: "anything",
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
