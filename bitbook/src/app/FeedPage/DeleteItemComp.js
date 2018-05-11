import React, { Component } from 'react';

import { postServices } from '../../services/postServices';

class DeleteItemComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: ""
        }

    }

    componentDidMount() {
        this.setState({
            postId: this.props.postId
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            postId: nextProps.postId
        });
    }

    deletePost = (event) => {
        event.preventDefault();

        postServices.deletePostRequest(this.state.postId)
            .then((res) => {
                this.props.reload();
            })
            .catch((error) => {
                console.log(error)
                this.props.reload();
            });
    }

    render() {
        return (
            <span className="right" onClick={this.deletePost}><i className="material-icons">delete</i></span>
        );
    }
}

export { DeleteItemComp };