import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setOpenedFiles } from "../../app/features/FileTreeSlice";

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
  }
  const handelCloseOne =()=>{
    
  }

  return (
    <div ref={menuRef}>
      <ul
        className={`bg-gray-100 w-fit px-7 py-2 rounded-md absolute border border-gray-500`}
        style={{
          left: x,
          top: y,
        }}
      >
        <li className="cursor-pointer" onClick={handelCloseOne}>Close</li>
        <li className="cursor-pointer" onClick={handelCloseAll}>Close All</li>
      </ul>
    </div>
  );
};

export default ContextMenu;
