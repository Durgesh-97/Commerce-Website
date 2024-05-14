import { useEffect, useState } from "react";
import ListItem from "./ListItems/ListItem";
import axios from "axios";

const Products = () => {
    const [items, setItems] = useState([])

        useEffect(() => {      
        async function fetchItems () {
            try{                
                const response = await axios.get('https://e-commerce-c2a22-default-rtdb.firebaseio.com/items.json')
                const data = response.data
                const transformData = data.map((item, index) => {
                    return{
                        ...item,
                        id: index
                }
            })
             setItems(transformData)
            }
            catch(error) {
                console.log("Error: ", error);
                alert("Something is wrong!!!")
            }             
        }
        fetchItems();        
    }, [])

    const updateItemTitle = async (itemId) => {        
        console.log(`Item with Id: ${itemId}`)
        try{
            let title = `Update Title #Item-${itemId}`
            await axios.patch(`https://e-commerce-c2a22-default-rtdb.firebaseio.com/items/${itemId}.json`,{
            title: title 
        })
        let data = [...items]
        let index = data.findIndex(e => e.id === itemId)
        data[index]['title']= title

        setItems(data)
        }
        catch(error) {
            console.log("Error Updating the Data");
        }         
    }

    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {/* <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem> */}
              {
                items.map(item => {                    
                    return (<ListItem key={item.id} data={item} updateItemTitle={updateItemTitle}/>) 
                })
              }
              {/* {[<ListItem data={item[0]}/>,<ListItem data={item[1]}/>,<ListItem data={item[2]}/>]} Render pattern List */}

            </div>
        </div>
    )
}

export default Products

