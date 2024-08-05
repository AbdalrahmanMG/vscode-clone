import { ChangeEvent, FormEvent, useState } from "react";
import FileIcon from "./icons/FileIcon";


const AddFileInput = () => {
  const [inputValue, setInputValue] = useState<string>("");


  //* handlers
  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  };

  return (
    <form className="flex  items-center gap-1" onSubmit={handleSubmit}>
      <FileIcon />
      <input type="text" className="border border-gray-300 rounded-sm min-w-10 flex-grow" value={inputValue} onChange={(e) => handleInputValue(e)} />
    </form>
  );
};

export default AddFileInput;
