import React, { Component } from 'react';
import { postServices } from '../../../services/postServices';
import { utils } from '../../../shared/utils'
import { ImagePostComp } from '../ImagePostComp'
import { VideoPostComp } from '../VideoPostComp'
import { TextPostComp } from '../TextPostComp'
import { CommentsList } from './CommentsList';

class PostPageDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postId: this.props.match.params.id,
            postType: this.props.match.params.type,
            selectedPost: "",
            comments: false
        }
    }

    componentDidMount() {

        const postUrl = utils.checkUrl(this.state.postType)
        const commentUrl = `/Comments?postId=${this.state.postId}`
        postServices.getRequest(postUrl + this.state.postId).then((res) => {
            const selectedPost = utils.checkPostTypeAndCreate([res])
            const renderItem = this.setItem(this.state.postType, selectedPost[0])
            this.setState({
                renderItem: renderItem
            })
        })
        postServices.getRequest(commentUrl).then((res) => {
            if (res.length === 0) {
                this.setState({
                    comments: false
                })
            } else {
                this.setState({
                    comments: true,
                    commentsList: res
                })
            }
        })

    }

    setItem = (type, selectedPost) => {

        if (type === "image") {
            return <ImagePostComp postData={selectedPost} />
        } else if (type === "video") {
            return <VideoPostComp postData={selectedPost} />
        } else if (type === "text") {
            return <TextPostComp postData={selectedPost} />
        }
    }

    render() {

        return (
            <div>
                {this.state.renderItem}
                {!this.state.comments ? <h2>No comments</h2> : <CommentsList comments={this.state.commentsList} />}
            </div>
        );
    }
}

export { PostPageDetails };