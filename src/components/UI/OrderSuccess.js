import Modal from "./Modal"
import OrderSuccessImage from "../../assets/icons/order_Success.svg"

const OrderSuccessModal = ({onClose, orderId}) => {
    return(
        <Modal onClose={onClose}>
            <div className="order-container">
                <div className="order-container--success">
                    <img src={OrderSuccessImage} alt="Success" className="img-fluid"/>
                    <div className="message">
                        <h1>Your Order Placed Successfully! </h1>
                        <span>OrderId# {orderId}</span>
                        {/* <span>OrderId: {Math.random().toString(32).slice(2)}</span> */}
                    </div>                    
                </div>
            </div>
        </Modal>
    )
}

export default OrderSuccessModal