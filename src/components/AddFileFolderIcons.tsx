import IconImg from "./IconImg"

const AddFileFolder = () => {
  return (
    <div className="flex justify-end gap-2">
        <IconImg src="icons/file-plus.svg" className="cursor-pointer"/>
        <IconImg src="icons/folder-plus1.svg" className="cursor-pointer"/>
    </div>
  )
}

export default AddFileFolder