import React, { Component } from 'react';

class DeleteItemComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postId: props.postId
        }

    }
    componentDidMount() {

    }

    deletePost = (event) => {
        event.preventDefault();
        console.log(this.state.postId);

    }

    render() {
        return (
            <span className="right" onClick={this.deletePost}><i class="material-icons">delete</i></span>
        );
    }
}

export { DeleteItemComp };