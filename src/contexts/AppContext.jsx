import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
import { getFromStorage, saveToStorage } from "../utils/Storage";


const initalState = getFromStorage("Appstate") || {
    friends: [],
    expenses:[],
    currency: "JP"
};

export const AppContext = createContext(initalState);


export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    const addFriends = (friends) => {
        dispatch({type: "ADD_FRIENDS", payload: friends})
    };
    const editFriends = (friends) => {
        dispatch({type: "EDIT_FRIENDS", payload: friends})
    };
    const deleteFriends = (id) => {
        dispatch({type: "DELETE_FRIENDS", payload: id})
    };

    const addExpenses = (expenses) => {
        dispatch({type: "ADD_EXPENSES", payload: expenses})
    };
    const editExpenses = (expenses) => {
        dispatch({type: "EDIT_EXPENSES", payload: expenses})
    };
    const deleteExpenses = (id) => {
        dispatch({type: "DELETE_EXPENSES", payload: id})
    };
    const setCurrency = (currency) => {
        dispatch({type: "SET_CURRENCY", payload: currency})
    };

    useEffect(() => {
        saveToStorage("Appstate",state)
    },[state])

    return (
        <AppContext.Provider value={
            {friends: state.friends,
            expenses: state.expenses,
            currency: state.currency,
            addFriends,
            editFriends,
            deleteFriends,
            addExpenses,
            editExpenses,
            deleteExpenses,
            setCurrency}
        }>
            {children}
        </AppContext.Provider>
    )

}