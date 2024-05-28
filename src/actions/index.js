import axios from "axios"

export const addItemHandler = item => {
    return dispatch => {
        dispatch({
            type: "ADD_ITEM",
            payload: {
                item: item
            }            
        })
    }
} 

export const removeItemHandler = id => {
    return dispatch => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: {
                id: id
            }            
        })
    }
} 

export const clearCartHandler = () => {  
    return dispatch => {  
        dispatch({
            type: "CLEAR_CART"
        })
    }
}

export const placeOrderHandler = (callback) => {
    return async(dispatch, getState) => {
        try {
            const {authentication, cart} = getState()
            if(!authentication.idToken){
                return callback({
                    error: true,
                    data: {
                        error: "Please login to place the order."
                    }
                })
            }
           const response = await axios.post(`https://e-commerce-c2a22-default-rtdb.firebaseio.com/orders/${authentication.localId}.json?auth=${authentication.idToken}`,{
                ...cart
            })
            dispatch({
                type: "CLEAR_CART"
            })        
            return callback({
                error: false,
                data: response.data
            })
        } catch (error) {
            return callback({
                error: true,
                ...error.response
            })
        }
    }
}