export function person(state = {} ,action){
    switch(action.type){
        case "PERSON":
            return action.payload 
        default :
            return state    
    }
}
