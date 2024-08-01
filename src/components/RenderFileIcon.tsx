import IconImg from "./IconImg";

interface IProps {
  filename: string;
  isOpen?: boolean;
  isFolder?: boolean;
}

const RenderFileIcon = ({ filename, isOpen, isFolder }: IProps) => {
  const extention = filename.split(".").pop();
  console.log(extention);

  //* files
  if (extention === "html") return <IconImg src="/public/icons/html.svg" />;
  if (extention === "tsx") return <IconImg src="/public/icons/react_ts.svg" />;

  // * folders
  if (extention === "node_modules" && isFolder) return isOpen ? <IconImg src="/public/icons/folder-node-open.svg" /> : <IconImg src="/public/icons/folder-node.svg" />;
  if (isFolder) return isOpen ? <IconImg src="/public/icons/folder-resolver-open.svg" /> : <IconImg src="/public/icons/folder-resolver.svg" />;
};

export default RenderFileIcon;
