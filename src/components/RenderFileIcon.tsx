import { extensionIconPaths } from "../constants";
import IconImg from "./IconImg";
import FileIcon from "./icons/FileIcon";

interface IProps {
  filename: string;
  isOpen?: boolean;
  isFolder?: boolean;
}

const RenderFileIcon = ({ filename, isOpen, isFolder }: IProps) => {
  const extension = filename.split(".").pop();

  if (extension && Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)) {
    const iconPath = isFolder ? (isOpen ? `${extensionIconPaths[extension]}-open.svg` : `${extensionIconPaths[extension]}.svg`) : `${extensionIconPaths[extension]}.svg`;
    return <IconImg src={iconPath} />;
  }

  if (isFolder) return isOpen ? <IconImg src="/public/icons/folder-resolver-open.svg" /> : <IconImg src="/public/icons/folder-resolver.svg" />;

  return <FileIcon/>
};

export default RenderFileIcon;
