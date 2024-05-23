const authenticationReducer = (state = {}, action) => {
    const {payload, type} = action
    switch(type) {
       case 'SIGNUP' : {
        return payload
       }
       case 'LOGIN': {
        return payload
       }
       default: return state;
    }   
}


 export default authenticationReducer