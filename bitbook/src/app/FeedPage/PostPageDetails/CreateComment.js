import React, { Component } from 'react';

import { postServices } from '../../../services/postServices';

class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
        this.handleButtonChange();
    }

    handleButtonChange = () => !this.state.text ? "disabled" : "";

    handlePostComment = () => {
        postServices.createPostRequest('comment', this.state.text, this.props.postId)
            .then((res) => {
                this.props.getComments();
                this.setState({
                    text: ""
                });
            });
    }

    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s10">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea onChange={this.handleChange} value={this.state.text} id="icon_prefix2" className="materialize-textarea"></textarea>
                            <label htmlFor="icon_prefix2">Comment</label>
                        </div>
                        <div className="col s2">
                            <div onClick={this.handlePostComment} className={`btn light-blue accent-3 myBtn ${this.handleButtonChange()}`}>
                                <span>Post</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateComment;