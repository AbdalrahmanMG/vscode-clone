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
          children: [
            {
              id: uuidv4(),
              name: "acorn.tsx",
              isFolder: false,
              content: `export interface IFile {
  id: string;
  name: string;
  isFolder: boolean;
  children?: IFile[];
  content?: string;
}
`,
            },
          ],
        },
        {
          id: uuidv4(),
          name: "text.txt",
          isFolder: false,
          content: "",
        },
      ],
    },
    {
      id: uuidv4(),
      name: "index.html",
      isFolder: false,
      content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,
    },
  ],
};
