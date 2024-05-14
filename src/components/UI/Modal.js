import { Fragment } from "react"
import reactDOM from "react-dom"
import { Backdrop } from "./Loader"

const Modal = ({onClose}) => {
    return (
        <Fragment>
            {
                reactDOM.createPortal(
                    <Fragment>
                        <Backdrop onClose={onClose} />
                        <div className="modal">
                            Modal Content will appear Here!!!
                            <button onClick={onClose}>X</button>
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