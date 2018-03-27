import myConstants from './constants';

class Utils {

    checkPostTypeAndCreate = (data) => {
        data.map((post) => {
            if (post.type === myConstants.typeImage) {
                return this.createImagePosts(post)
            } else if (post.type === myConstants.typeText) {
                return this.createTextPosts(post)
            } else if (post.type === myConstants.typeVideo) {
                return this.createVideoPosts(post)
            }
        })
    }

    createImagePosts = (post) => {
        return new ImagePost(post)
    }

    createTextPosts = (post) => {
        return new TextPost(post)
    }

    createVideoPosts = (post) => {
        return new VideoPost(post)
    }

}

export default utils = new Utils();