import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesTab from "./OpenedFilesTab";
import ContextMenu from "./ui/ContextMenu";
import { useState } from "react";

const OpenedFileBar = () => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const [menuPositions, setMenuPositions] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setMenuPositions({ x: e.clientX, y: e.clientY });
    setShowMenu(true);
  };

  return (
    <div>
      <div className="flex items-center" onContextMenu={(e) => handleContextMenu(e)}>
        {openedFiles.map((file) => (
          <OpenedFilesTab key={file.id} file={file} />
        ))}
      </div>
      {showMenu && <ContextMenu positions={menuPositions} setShowMenu={setShowMenu} />}
    </div>
  );
};

export default OpenedFileBar;