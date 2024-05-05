// import ListItem from "./components/Products/ListItems/ListItem";
import ListItem from "./ListItems/ListItem";

const items = [
    {
        id: 0,
        discountedPrice: 340,
        price: 450,
        titles: "Title of the Item",
        thumbnail: "placeholder.png"
    },
    {
        id: 1,
        discountedPrice: 160,
        price: 350,
        titles: "Title of the Item 2",
        thumbnail: "placeholder.png"
    }
]

const Products = () => {
    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem>
            </div>
        </div>
    )
}

export default Products
