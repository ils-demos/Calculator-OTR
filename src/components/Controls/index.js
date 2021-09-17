import Buttons from "./Buttons";
import { controlRows } from "./Data";

function Controls() {
    return (
        <div className="d-flex flex-column">
            {
                controlRows.map((v,k)=>{
                    return(
                        <div className="d-flex flex-wrap" key={k}>
                            {
                                v.button.map((v,k)=>{
                                    return <Buttons value={v.value} customClass={v.classes} key={k}/> 
                                })   
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Controls;