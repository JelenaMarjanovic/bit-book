import React from 'react'
import { utils } from '../../../shared/utils'

const ImageField = ({ onChangeHandler, imageValue }) => {

    const imageIsValid = utils.isImageUrl(imageValue);

    const showError = (!imageIsValid  && imageValue !== "") ? "isInvalid" : "isValid";
    
    const onInputChange = (event) => {
        onChangeHandler({
            field: "image",
            value: event.target.value
        });
    } 

    return (
        <div className="col s4 center">
            <img src={ (imageIsValid) ? imageValue : "http://via.placeholder.com/150"} alt="profileImg" />
            <textarea value={imageValue} id="image" className="materialize-textarea" onChange={onInputChange}></textarea>
            <label htmlFor="image">Image URL</label>
            <p className={ showError }>Input must be image URL</p>
        </div>
    )
}

export { ImageField }