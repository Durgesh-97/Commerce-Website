import { useState } from "react"
import AddToCartIcon from "../../../assets/icons/add_cart.svg"

const ListItem = ({ data }) => {
    const [counter, setCounter] = useState(0)

    const increaseCounterByOne = () => {
        setCounter(counter + 1)
    }

    const decreaseCounterByOne = () => {
        if(counter === 0){
            return;
        }
            
            setCounter(counter - 1)
    } 
    const handleClick = () => {
        //Handle button click
    }
    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alts={`data.title`} />
            <div className={"item-card_information"}>
                <div className={"pricing"}>
                    <span>₹ {data.discountedPrice}</span>
                    <small>
                        <strike>₹ {data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.titles}</h3>
                </div>
                {/* <button className={"cart-add"}>
                    <span>Add to cart</span>
                    <img src={AddToCartIcon} alt="Cart Icon" />
                </button> */}
                <div className="cart-addon">
                    <button onClick={decreaseCounterByOne}><span>-</span></button>
                    <span>{counter}</span>
                    <button onClick={increaseCounterByOne}><span>+</span></button>

                </div >
            </div>
        </div>
    )

}

export default ListItem;