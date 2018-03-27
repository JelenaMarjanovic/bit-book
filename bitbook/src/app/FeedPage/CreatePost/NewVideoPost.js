import React from 'react';

class NewVideoPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: "",
            valid: false,
        }
    }

    onChangeHandler = (e) => {
        this.setState({value: e.target.value})
    }

    isValid = () => (!this.state.valid) ? "disabled" : "";

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