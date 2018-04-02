import React from 'react';
import { utils } from '../../../shared/utils'
import { postServices } from '../../../services/postServices'

import { NameField } from './NameField'
import { DescriptionField } from './DescriptionField'
import { ImageField } from './ImageField'

class EditProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            image: "",
            isValidForm: false,
        }
    }

    onChangeHandler = ({ field, value }) => {
        this.setState({ [field]: value }, () => {
            const { name, description, image } = this.state

            const isValid = this.isValidForm(name, description, image)
            this.setState({ isValidForm: isValid })
        })
    }

    updateProfile = () => {
        const { name, description, image } = this.state
        const data = {
            "name": name,
            "about": description,
            "aboutShort": description,
            "email": "blabla@gmail.com",
            "avatarUrl": image
        }
        postServices.createPutRequest(data)
            .then(() => {
                this.props.closeModal();
            })
            .then(() => {
                this.props.reload();
            })
            .catch((error) => {
                console.log(error)
                this.props.closeModal();
            })
    }

    isValidForm = (name, desc, image) => {
        return utils.isValidName(name) && utils.firstLetterIsUpperCase(desc) && utils.isImageUrl(image);
    }

    isValid = () => (!this.state.isValidForm) ? "disabled" : "";

    render() {

        const { description, name, image } = this.state

        return (
            <div id="editProfile" className="modal">
                <form>
                    <div className="modal-content">
                        <h4>Update profile</h4>
                        <div className="row">
                            <ImageField onChangeHandler={this.onChangeHandler} imageValue={image} />
                            <NameField onChangeHandler={this.onChangeHandler} nameValue={name} />
                            <DescriptionField onChangeHandler={this.onChangeHandler} descriptionValue={description} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a onClick={this.props.closeModal} className="light-blue accent-3 btn">close</a>
                        <a onClick={this.updateProfile} className={`light-blue accent-3 btn ${this.isValid()}`}>update</a>
                    </div>
                </form>
            </div>
        );
    }
};

export { EditProfile };