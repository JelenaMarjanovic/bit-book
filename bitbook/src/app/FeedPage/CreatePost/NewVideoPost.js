import React from 'react';

import { utils } from '../../../shared/utils';
import { postServices } from '../../../services/postServices';

class NewVideoPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            isValidUrl: false,
            showError: false,
        }
    }

    onChangeHandler = (e) => {
        const { value } = e.target;
        const isValid = utils.isYouTubeURL(value);
        const showError = utils.showInvalidInput(value, isValid);

        this.setState({
            url: value,
            isValidUrl: isValid,
            showError: showError
        });
    }

    createPost = () => {
        const { reload, modalInstance } = this.props;

        postServices.createPostRequest("video", this.state.url)
            .then(() => {
                reload();
            })
            .then(() => {
                modalInstance.close();
                this.setState({
                    url: ""
                });
            });
    }

    isValid = () => (!this.state.isValidUrl) ? "disabled" : "";
    showError = () => (this.state.showError) ? "isInvalid" : "isValid";

    render() {
        return (
            <div id="modalVideo" className="modal">
                <div className="modal-content">
                    <h4>New video post</h4>
                    <form>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea onChange={this.onChangeHandler} value={this.state.url} id="videopost" className="materialize-textarea"></textarea>
                                <label htmlFor="videopost">YouTube video link</label>
                            </div>
                            <p className={this.showError()}>Input must be valid youtube link</p>
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

export { NewVideoPost };