import {createContext} from 'react';
import {useReducer} from 'react';


const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
        return {
            ...state,
            expenses: [...state.expenses, action.payload],
        };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };

        default:
            return state;
    }
}
const initialState = {
    budget : 10000,
    expenses: [
       {id: 12, name: 'Food', cost: 40},
       {id: 13, name: 'Debt', cost: 450}, 
       {id: 33, name: 'child support', cost: 670},
       {id: 11, name: 'Transportation', cost: 900},
       {id: 16, name: 'Tuition', cost: 1150}, 
       {id: 93, name: 'Mobile device', cost: 550}
       
    ],

};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <AppContext.Provider
             value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
             }}
    
    >
        {props.children}
    
    </AppContext.Provider>)
};