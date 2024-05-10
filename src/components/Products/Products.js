// import ListItem from "./components/Products/ListItems/ListItem";
import { useEffect, useState } from "react";
import ListItem from "./ListItems/ListItem";
import axios from "axios";

const Products = () => {
    const [items, setItems] = useState([])

        useEffect(() => {
        //    fetch('https://e-commerce-c2a22-default-rtdb.firebaseio.com/items.json')
        //    .then(response => response.json())
        //    .then(data => {
        //     console.log(error);
        //    })

        axios.get('https://e-commerce-c2a22-default-rtdb.firebaseio.com/items.json')
        .then(response => {
            console.log(response);
            const data = response.data
            const transformData = data.map((item, index) => {
                return{
                    ...item,
                    id: index
                }
            })
            setItems(transformData)
            
        })
        .catch(error => {
            console.log(error);
        }

        )
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
