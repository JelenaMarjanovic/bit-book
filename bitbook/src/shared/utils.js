import { myConst } from './constants';
import { ImagePost } from '../models/ImagePost';
import { TextPost } from '../models/TextPost';
import { VideoPost } from '../models/VideoPost';

class Utils {

    checkPostTypeAndCreate = (data) => {

        return data.map((post) => {
            if (post.type === myConst.typeImage) {
                return this.createImagePosts(post)
            } else if (post.type === myConst.typeText) {
                return this.createTextPosts(post)
            } else if (post.type === myConst.typeVideo) {
                return this.createVideoPosts(post)
            }
            return true
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

    getPostTemplate = (type, content) => {
        if (type === "text") {
            return {
                template: {
                    "text": content
                },
                url: myConst.textPostUrl
            }
        } else if (type === "image") {
            return {
                template: {
                    "imageUrl": content
                },
                url: myConst.imagePostUrl
            }
        } else if (type === "video") {
            return {
                template: {
                    "videoUrl": content
                },
                url: myConst.videoPostUrl
            }
        }
    }

    filterYouTube = (url) => {
       return url.replace("watch?v=", "embed/");
    }

}

export const utils = new Utils();