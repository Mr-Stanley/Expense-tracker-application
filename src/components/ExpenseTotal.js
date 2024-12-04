import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
const { expenses } = useContext(AppContext);



    return (
        <div className='alert alert-primary'>
            <span>Spent so far: $960</span>

        </div>
    )
}

export default ExpenseTotal;