import "./OverLay.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const OverLay = ({ children }) => {
  const { PopUp } = useContext(UserContext);
  
  return (
    <div className={PopUp.in === true ? "over-lay show" : "over-lay"}>
      {children}
    </div>
  );
};
export default OverLay;
