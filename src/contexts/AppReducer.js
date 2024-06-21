export default (state, action) => {
    switch (action.type) {
        case "ADD_FRIENDS":
            return {
                ...state,
                friends: [...state.friends, action.payload]
            }
        case "EDIT_FRIENDS":
            return {
                ...state,
                friends: state.friends.map(friend => friend.id === action.payload.id ? action.payload : friend)
            }
            
        case "DELETE_FRIENDS":
            return {
                ...state,
                friends: state.friends.filter(friend => friend.id !== action.payload)
            }
        case "ADD_EXPENSES":
            return{
                ...state,
                expenses:[...state.expenses, action.payload]
            }
        case "EDIT_EXPENSES":
            return{
                ...state,
                expenses: state.expenses.map(expense => expense.id === action.payload.id ? action.payload : expense)
            }    
        case "DELETE_EXPENSES":
            return{
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            }  
         case "SET_CURRENCY":
            return  {
                ...state,
                currency: action.payload
            }
        default:
            return state;
            
    }
};
