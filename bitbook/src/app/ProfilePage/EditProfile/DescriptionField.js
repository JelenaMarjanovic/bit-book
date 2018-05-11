import React from 'react';

import { utils } from '../../../shared/utils';

const DescriptionField = ({ onChangeHandler, descriptionValue }) => {
    const descriptionIsValid = utils.firstLetterIsUpperCase(descriptionValue);
    const showError = (!descriptionIsValid) ? "isInvalid" : "isValid";

    const onInputChange = (event) => {
        onChangeHandler({
            field: "description",
            value: event.target.value
        });
    } 

    return ( 
        <div className="input-field col s12">
            <textarea onChange={onInputChange} value={descriptionValue} id="description" className="materialize-textarea"></textarea>
            <label htmlFor="description">Description</label>
            <p className={ showError }>Description must start with upper case character</p>
        </div>
    )
}

export { DescriptionField }