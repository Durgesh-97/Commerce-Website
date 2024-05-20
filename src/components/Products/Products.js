import { useEffect, useState } from "react"
import ListItem from "./ListItems/ListItem"
import axios from "axios"
import Loader from "../UI/Loader"
import {useHistory, useLocation, useParams } from "react-router-dom/cjs/react-router-dom"

const Products = () => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)
    const params = useParams()
    const history = useHistory()
    const {search} = useLocation()
    const queryParams = new URLSearchParams(search).get("search")

        useEffect(() => {      
           async function fetchItems () {
            try { 
                let slug = `items.json`
                if(params.category){
                    slug = `items-${params.category}.json`
                }
                if(queryParams) {
                    slug += `?search=${queryParams}`
                }             
                const response = await axios.get(`https://e-commerce-c2a22-default-rtdb.firebaseio.com/${slug}`)
                const data = response.data
                
                if(!data) {
                    handleNotFound();
                    return;
                } 

                const transformData = data.map((item, index) => {
                    return{
                        ...item,
                        // quantity: 0,
                        id: index
                }
            })
            //  setLoader(false)
             setItems(transformData)
            }
            catch(error) {
                // setLoader(false)
                console.log("Error: ", error);
                alert("Something is wrong!!!")
            }
            finally {
                setLoader(false)
            }             
        }
        fetchItems();
        
        return () => {
            setItems([])
            setLoader(true)    
            
        }

    }, [params.category, queryParams])

    const handleNotFound = () => {
        history.push("/404")
    }

    // useEffect(() => {
    //     if(eventState.id > -1) {
    //         if(eventState.type === 1) {
    //             handleAddItem(eventState.id)
    //         }
    //         else if(eventState.type === -1) {
    //             handleRemoveItem(eventState.id)
    //         }
    //     }
    // }, [eventState])

    // const handleAddItem = id => {
    //     let data = [...items]
    //     let index = data.findIndex(i => i.id === id)
    //     data[index].quantity += 1

    //     setItems([...data])
    //     onAddItem(data[index]);
    // }

    // const handleRemoveItem = id => {
    //     let data = [...items]
    //     let index = data.findIndex(i => i.id === id)
    //     if(data[index].quantity !== 0) {
    //         data[index].quantity -= 1
    //         setItems([...data])
    //         onRemoveItem(data[index])
    //     }
    // }

    return (
        <>
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {/* <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem> */}
                {
                    items.map(item => {
                        return (<ListItem key={item.id} data={item}/>)
                    })
                }
                {/* {[<ListItem data={item[0]}/>,<ListItem data={item[1]}/>,<ListItem data={item[3]}/>]} */}
            </div>
        </div>
        { loader && <Loader/>}
        </>
    )
}

export default Products





