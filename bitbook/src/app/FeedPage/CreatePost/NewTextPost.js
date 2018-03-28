import React from 'react';
import { utils } from '../../../shared/utils'
import { postServices } from '../../../services/postServices'

class NewTextPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            isValidText: false,
            showError: false
        }
    }

    onChangeHandler = (e) => {
        const { value } = e.target
        const isValid = utils.isText(value);
        const showError = utils.showInvalidInput(value, isValid)

        this.setState({ text: value, isValidText: isValid, showError: showError })
    }

    createPost = async () => {
        await postServices.createPostRequest("text", this.state.text)
        window.location.reload()
    }

    isValid = () => (!this.state.isValidText) ? "disabled" : "";
    showError = () => (this.state.showError) ? "isInvalid" : "isValid";

    render() {
        return (
            <div id="modalText" className="modal">
                <div className="modal-content">
                    <h4>New text post</h4>
                    <form>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea onChange={this.onChangeHandler} id="textpost" className="materialize-textarea"></textarea>
                                <label htmlFor="textpost">Post content</label>
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

export {NewTextPost};