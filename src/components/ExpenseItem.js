import React, {useContext} from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';


const ExpenseItem = (props) => {

    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch ({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    return(
        <li className='list-group-item d-flex justify-content-between align-center'>
            {props.name}
            <div>
                <span className='badge-badge-primary badge-pill mr-3 '>
                    ${props.cost}
                </span>
                <TiDelete size={25} onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;