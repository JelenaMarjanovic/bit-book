import { myConst } from './constants';
import { ImagePost } from '../models/ImagePost';
import { TextPost } from '../models/TextPost';
import { VideoPost } from '../models/VideoPost';

class Utils {

    checkPostTypeAndCreate = (data) => {
        return data.map((post) => {
            if (post.type === myConst.typeImage) {
                return new ImagePost(post)
            } else if (post.type === myConst.typeText) {
                return new TextPost(post)
            } else if (post.type === myConst.typeVideo) {
                return new VideoPost(post)
            }
            return true
        })
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

    isImageUrl = (rawUrl) => {
        const p = /\.(jpeg|jpg|gif|png)$/;
        const url = rawUrl.trim();
        if (url.match(p)) {
            return true;
        }
        return false;
    }

    isYouTubeURL = (rawUrl) => {
        const p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\?\S*)?$/;
        const url = rawUrl.trim();
        if (url.match(p)) {
            return true;
        }
        return false;
    }

    isText = (text) => {
        return (text.includes("www") || text.includes("http")) ? false : true;
    }

    showInvalidInput = (value, validate) => {
        if (value === "") {
            return false;
        } else {
            if (!validate) {
                return true;
            }
        }
    }

    checkUrl = (type) => {
        if (type === "text") {
            return "TextPosts/"
        } else if (type === "image") {
            return "ImagePosts/"
        } else if (type === "video") {
            return "VideoPosts/"
        } else {
            return "Invalid Post type"
        }
    }

}

export const utils = new Utils();