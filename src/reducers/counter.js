

const counterReducer = (state= {value: 0}, action)=>{
    switch(action.type){
        case 'increment' : 
        return {value: state + 1};
        case 'decrement' : 
        return {value: state - 1};
        default : return state;
    }
}
export default counterReducer;