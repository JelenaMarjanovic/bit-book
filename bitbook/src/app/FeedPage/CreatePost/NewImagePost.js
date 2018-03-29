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

        this.setState({ imageUrl: value, isValidUrl: isValid, showError: showError })
    }

    isValid = () => (!this.state.isValidUrl) ? "disabled" : "";
    showError = () => (this.state.showError) ? "isInvalid" : "isValid";

    createPost = () => {
        const { reload, modalInstance } = this.props;
        postServices.createPostRequest("image", this.state.imageUrl)
            .then(() => {
                reload()
            })
            .then(() => {
                modalInstance.close();
                this.setState({ imageUrl: "" })
            })
    }

    render() {
        return (
            <div id="modalImage" className="modal">
                <div className="modal-content">
                    <h4>New image post</h4>
                    <form>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea onChange={this.onChangeHandler} value={this.state.imageUrl} id="imagepost" className="materialize-textarea"></textarea>
                                <label htmlFor="imagepost">Image url</label>
                            </div>
                            <p className={this.showError()}>Input must be an image url</p>
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

export { NewImagePost };