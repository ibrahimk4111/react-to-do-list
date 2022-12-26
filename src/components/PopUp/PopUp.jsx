import { useContext, useRef } from "react";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";
import "./PopUp.css";

const PopUp = () => {
  const taskRef = useRef();
  const completionRef = useRef();

  const { PopUp, setPopUp, editTask, oldTaskValue } = useContext(UserContext);

  const handleSubmit = (e, isOk) => {
    e.preventDefault();

    const taskValue = taskRef.current.value;
    const completeValue = completionRef.current.value;
    const date = new Date().toLocaleDateString()

    if (isOk === true) {
      toast.success("Task was successfully edited");
      editTask(taskValue, completeValue, date);
    }
    setPopUp({ in: false, item: null });
    taskRef.current.value="";
  };

  return (

    <div className={PopUp.in === false ? "pop-up" : "pop-up pop-up-show"}>

      <h4 className="text-xl mb-5 font-bold">Are you sure to edit ?</h4>

      <form onSubmit={(e) => handleSubmit(e, true)}>
        <input
          ref={taskRef}
          placeholder={oldTaskValue.TKVL}
          type="text"
          className="input font-extralight input-bordered w-full max-w-xs" />
        <select
          ref={completionRef}
          // placeholder={oldTaskValue.comVL}
          className='input input-bordered w-full max-w-xs my-3'
        >
          <option value="Completed" >Completed</option>
          <option value="Uncomplete" >Uncomplete</option>
        </select>
        <div className=" mt-6 flex justify-center gap-3">
          <button type="submit"
            className=" text-white w-28 rounded cursor-pointer font-bold border-none h-10 transition-all bg-green-400 hover:bg-green-600">
            confirm
          </button>

          <button
            type="submit"
            onClick={(e) => handleSubmit(e, false)}
            className="text-white w-28 rounded cursor-pointer font-bold border-none h-10 transition-all bg-red-400 hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default PopUp;
