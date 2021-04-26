

const initialState={
    infList:[],
    parList:[],
    gymList:[],
    accoutInfo:null
}

const mainReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_INF":
            return {
                ...state,infList:state.infList.concat(action.payload)
            };
        case "SET_INF":
            return {
                ...state,infList:action.payload
            };
        case "ADD_PAR":
            return {
                ...state,parList:state.parList.concat(action.payload)
            };
        case "SET_PAR":
            return {
                ...state,parList:action.payload
            };

        case "EDIT_INF":
            let newList = [...state.infList];
            const targetIndex = state.infList.findIndex(f=>f.id===action.payload.id); 
            newList[targetIndex] = action.payload;
            return {
                ...state,infList:newList
            };
        case "EDIT_PAR":
            let newListP = [...state.parList];
            const targetIndexP = state.parList.findIndex(f=>f.id===action.payload.id); 
            newListP[targetIndexP] = action.payload;
            return {
                ...state,parList:newListP
            };
        // case DELETE_FOOD:
        //     return {
        //         ...state,foodList: state.foodList.filter((item)=>
        //         item.key!==action.key)
        //     };
        case "ADD_GYM":
            return {
                ...state,gymList:state.gymList.concat(action.payload)
            };
            case "SET_GYM":
                return {
                    ...state,gymList:action.payload
                };
case "SET_ACCOUNT_INFO":
    return {
        ...state,accoutInfo:action.payload
    };
                
        default:
            return state;
    }
}

export default mainReducer;