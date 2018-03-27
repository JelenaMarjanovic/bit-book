import React from 'react';

class NewTextPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: ""
        }
    }

    onChangeHandler = (e) => {
        this.setState({value: e.target.value})
    }

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
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a className="light-blue accent-3 btn">Create Post</a>
                </div>
            </div>
        );
    }
};

export { NewTextPost };