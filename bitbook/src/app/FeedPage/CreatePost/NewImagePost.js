import React from 'react';

class NewImagePost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: "",
            invalid: "disabled",
        }
    }

    onChangeHandler = (e) => {
        this.setState({value: e.target.value})
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
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a className={`light-blue accent-3 btn ${this.state.invalid}`}>Create Post</a>
                </div>
            </div>
        );
    }
};

export { NewImagePost };