import React from 'react';
import { utils } from '../../../shared/utils'
import { postServices } from '../../../services/postServices'

class NewImagePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: "",
            isValidUrl: false,
            showError: false
        }
    }

    onChangeHandler = (e) => {
        const { value } = e.target
        const isValid = utils.isImageUrl(value);
        const showError = utils.showInvalidInput(value, isValid)

        this.setState({ url: value, isValidUrl: isValid, showError: showError })
    }

    isValid = () => (!this.state.isValidUrl) ? "disabled" : "";
    showError = () => (this.state.showError) ? "isInvalid" : "isValid";

    createPost = async () => {
        await postServices.createPostRequest("image", this.state.imageUrl)
        window.location.reload()
    }

    render() {
        return (
            <div id="modalImage" className="modal">
                <div className="modal-content">
                    <h4>New image post</h4>
                    <form>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea onChange={this.onChangeHandler} id="imagepost" className="materialize-textarea"></textarea>
                                <label htmlFor="imagepost">Image url</label>
                            </div>
                            <p className={this.showError()}>invalid input</p>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a onClick={this.createPost} className={`light-blue accent-3 btn ${this.isValid()}`}>Create Post</a>
                </div>
            </div>
        );
    }
};

export {NewImagePost};