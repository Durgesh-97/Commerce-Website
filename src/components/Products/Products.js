// import ListItem from "./components/Products/ListItems/ListItem";
import { useEffect, useState } from "react";
import ListItem from "./ListItems/ListItem";
// import { response } from "express";

const Products = () => {
    const [items, setItems] = useState(
        [
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
            },
            {
                id: 2, 
                discountedPrice: 160,
                price: 350,
                titles: "Title of the Item 3",
                thumbnail: "placeholder.png"
            },
            {
                id: 3, 
                discountedPrice: 160,
                price: 350,
                titles: "Title of the Item 4",
                thumbnail: "placeholder.png"
            }
        ])

        useEffect(() => {
           fetch('https://e-commerce-c2a22-default-rtdb.firebaseio.com/items')
           .then(response => response.json())
           .then(data => {
            console.log(data);
           })
           .catch(error => {
            console.log(error);
           })  
        }, [])

    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {/* <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem> */}
              {
                items.map(item => {
                    console.log(item);
                    return (<ListItem key={item.id} data={item}/>)
                })
              }
              {/* {[<ListItem data={item[0]}/>,<ListItem data={item[1]}/>,<ListItem data={item[2]}/>]} Render pattern List */}

            </div>
        </div>
    )
}

export default Products
