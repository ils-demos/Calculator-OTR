import { useEffect } from "react"
import { useSelector } from "react-redux"

function Display() {
    const memory = useSelector(state => state.memory)
    
    // useEffect(() => {
    //     console.log(JSON.stringify("memory: " + JSON.stringify(memory)))
    // }, [memory])
    
    return(
        <div
            className="
                px-2 py-1
                d-flex
                bg-gray-transparent
                text-white
                justify-content-end
            "
            style={{minHeight: "50px", fontSize: "24px"}}
            >
            {memory.display}
        </div>
    )
}

export default Display;