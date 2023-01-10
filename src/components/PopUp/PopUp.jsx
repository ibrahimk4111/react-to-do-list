import { useContext, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../context/UserContext";
import "./PopUp.css";

const PopUp = () => {
  const taskRef = useRef();

  const { modalDirection, PopUp, setPopUp, addTasks, editTask, oldTaskValue } =
    useContext(UserContext);

    
  const handleSubmit = (e, isOk) => {
    e.preventDefault();

    const taskValue = taskRef.current.value;
    const date = new Date().toLocaleDateString();

    if (isOk === true) {
      if (modalDirection.text === "Add") {
        if (taskValue.trim() !== "") {
          addTasks(taskValue, date);
          toast.success("Successfully added");
          setPopUp({ in: false });
          taskRef.current.value = "";
        }else{
          toast.error("Write Something")
        }
      }

      if (modalDirection.text === "Edit") {
        if(taskValue.trim() !== ""){
           editTask(taskValue)
           toast.success("successfully edited")
           setPopUp({ in: false });
           taskRef.current.value = "";
          }else{
            toast.error("Edit please")
          }
      }
    } else {
      setPopUp({ in: false });
      taskRef.current.value = "";
    }
  };


  return (
    <div>
      <ToastContainer />
      <div className={PopUp.in === false ? "pop-up" : "pop-up pop-up-show"}>
        <h4 className="text-xl mb-5 font-bold">
          {modalDirection.text === "Add" ? "Add" : "Update Task"}
        </h4>

        <form onSubmit={(e) => handleSubmit(e, true)}>
          <div>
            <textarea
              ref={taskRef}
              placeholder={oldTaskValue.taskValue}
              defaultValue={oldTaskValue.taskValue}
              type="text"
              className=" textarea textarea-bordered w-full "
            />
          </div>

          <div className=" mt-6 flex justify-center gap-3">
            <button
              type="submit"
              className=" text-white w-28 rounded cursor-pointer font-bold border-none h-10 transition-all bg-green-400 hover:bg-green-600"
            >
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
    </div>
  );
};
export default PopUp;
