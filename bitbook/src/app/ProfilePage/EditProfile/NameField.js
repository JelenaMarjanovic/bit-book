import React from 'react';

import { utils } from '../../../shared/utils';

const NameField = ({ onChangeHandler, nameValue }) => {
    const nameIsValid = utils.isValidName(nameValue);

    const showError = (!nameIsValid) ? "isInvalid" : "isValid";

    const onInputChange = (event) => {
        onChangeHandler({
            field: "name",
            value: event.target.value
        });
    } 
    
    return (
        <div className="input-field col s5 offset-s2">
            <textarea onChange={onInputChange} value={nameValue} id="name" className="materialize-textarea"></textarea>
            <label htmlFor="name">Name</label>
            <p className={ showError }>Name must start with upper case character</p>
        </div>
    )
}

export { NameField }