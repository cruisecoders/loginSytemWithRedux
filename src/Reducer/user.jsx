const initial={
    usern:'',
    pasw:'' ,
    nme:'',
    users:[]
    }

export const userReducer = (state = initial, action) => {
    switch (action.type) {
        case "USERNAME":
        return {
        ...state,
        usern: action.payload, 
        };   
        case "PASSWORD":
        return {
        ...state,
        pasw: action.payload, 
        };  
        case 'NAME':
        return{
            ...state,
            nme:action.payload,
        };
        case 'REGISTER':
        return{
            ...state,
            users:action.payload,
        };
    default:
    return state;
    }
    };
    
    export default userReducer;