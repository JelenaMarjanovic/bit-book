import React from 'react';

import { postServices } from '../../../services/postServices';

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorId: this.props.commentData.authorId
        }
    }

    componentDidMount() {
        const url = "users/" + this.state.authorId;

        postServices.getRequest(url).then((res) => {
            this.setState ({
                avatarUrl:res.avatarUrl
            });
        });
    }

    render() {
        const { commentData } = this.props;
        const { body, authorName } = commentData;

        return (
            <li className="collection-item avatar" >
                <img src={this.state.avatarUrl} alt="" className="circle" />
                <span>{authorName}</span>
                <br />
                <span className="title">{body}</span>
                <br />
                <p className="right">{commentData.getDate()}</p>
            </li>
        );
    }
}

export { CommentItem };