import { useDispatch } from "react-redux";
import { addValue, calculateOperant, clear } from "../../../utilities/redux/actions";

function Buttons({value, customClass}){

    const num = /^\d+$/
    const dispatch = useDispatch()
    const handleClick = (value) => {
        if (value === "AC") {
            dispatch(clear())
        } else if (num.test(value)) {
            dispatch(addValue(value))
        } else {
            dispatch(calculateOperant(value))
        }
    }
    
    return(
        <div 
            className={"py-1 border border-dark text-center " + customClass}
            onClick={()=>handleClick(value)}
            >
            {value}
        </div>
    )
}

export default Buttons;