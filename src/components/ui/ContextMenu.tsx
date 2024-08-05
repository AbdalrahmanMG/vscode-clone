import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFiles } from "../../app/features/FileTreeSlice";
import { RootState } from "../../app/store";

interface IProps {
  setShowMenu: (val: boolean) => void;
  positions: {
    x: number;
    y: number;
  };
}

const ContextMenu = ({ positions: { x, y }, setShowMenu }: IProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch()
  const {tabIdToRemove, openedFiles} = useSelector((state: RootState)=>state.tree)

  useEffect(() => {
    const handleClickOutside = (e:MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);

  //* handlers 
  const handelCloseAll =()=>{
    dispatch(setOpenedFiles([]))
    setShowMenu(false)
  }
  const handelCloseOne =()=>{
    const filteredTabs = openedFiles.filter((f) => f.id !== tabIdToRemove);
    dispatch(setOpenedFiles(filteredTabs))
    setShowMenu(false)
  }

  return (
    <div ref={menuRef}>
      <ul
        className={`bg-gray-100 w-fit p-2 rounded-md absolute border border-gray-500`}
        style={{
          left: x,
          top: y,
        }}
      >
        <li className="cursor-pointer hover:bg-gray-300 rounded-md px-7 py-2" onClick={handelCloseOne}>Close</li>
        <li className="cursor-pointer hover:bg-gray-300 rounded-md px-7 py-2" onClick={handelCloseAll}>Close All</li>
      </ul>
    </div>
  );
};

export default ContextMenu;
