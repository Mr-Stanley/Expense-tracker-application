import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        { id: 12345, name: "Transportation", cost: 600},
        { id: 12345, name: "Food", cost: 1000},
        { id: 12345, name: "Utilities", cost: 300},
        { id: 12345, name: "Debt", cost: 250},
        { id: 12345, name: "Others", cost: 780},
    ];
    return(
        <ul className='list-group'>
            {expenses.map((expense)=>(
                <ExpenseItem 
                id={expense.id} 
                name={expense.name} 
                cost={expense.cost}/>
            ))}
        </ul>
    );


};

export default ExpenseList;