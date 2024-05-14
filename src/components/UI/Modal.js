import { Fragment } from "react"
import reactDOM from "react-dom"
import { Backdrop } from "./Loader"

const Modal = () => {
    return (
        <Fragment>
            {
                reactDOM.createPortal(
                    <Fragment>
                        <Backdrop/>
                        <div className="modal">
                            Modal Content will appear Here!!!

                        </div>
                    </Fragment>
                    ,
                    document.getElementById("modal-root")
                )
            }
        </Fragment>
    )
}

export default Modal