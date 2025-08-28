import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";

const AddItem = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(val));
    setVal("");
  }

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter your tasks..."
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="border border-gray-300 p-2 rounded w-100"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer">Add</button>
    </div>
  );
};

export default AddItem;
