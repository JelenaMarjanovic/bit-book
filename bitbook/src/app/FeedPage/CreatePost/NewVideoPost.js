import React from 'react';

class NewVideoPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "",
            isValidUrl: false,
        }
    }

    onChangeHandler = (e) => {
        const { value } = e.target
        const isValid = this.isYouTubeURL(value);

        this.setState({ url: value, isValidUrl: isValid })
    }

    isValid = () => (!this.state.isValidUrl) ? "disabled" : "";

    isYouTubeURL = (rawUrl) => {
        const p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\?\S*)?$/;
        const url = rawUrl.trim();
        if (url.match(p)) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div id="modalVideo" className="modal">
                <div className="modal-content">
                    <h4>New video post</h4>
                    <form>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea onChange={this.onChangeHandler} id="videopost" className="materialize-textarea"></textarea>
                                <label htmlFor="videopost">YouTube video link</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a className={`light-blue accent-3 btn ${this.isValid()}`}>Create Post</a>
                </div>
            </div>
        );
    }
};

export { NewVideoPost };