import AddToCartIcon from "../../../assets/icons/add_cart.svg"

const ListItem = ({ data }) => {
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
                <button className={"cart-add"}>
                    <span>Add to cart</span>
                    <img src={AddToCartIcon} alt="Cart Icon" />
                </button>
            </div>
        </div>
    )

}

export default ListItem;