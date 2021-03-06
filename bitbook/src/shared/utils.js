import { myConst } from './constants';
import { ImagePost } from '../models/ImagePost';
import { TextPost } from '../models/TextPost';
import { VideoPost } from '../models/VideoPost';
import { Profile } from '../models/Profile';
import { User } from '../models/User';

class Utils {
    checkPostTypeAndCreate = (data) => {
        return data.map((post) => {
            if (post.type === myConst.typeImage) {
                return new ImagePost(post);
            } else if (post.type === myConst.typeText) {
                return new TextPost(post);
            } else if (post.type === myConst.typeVideo) {
                return new VideoPost(post);
            }

            return true;
        });
    }

    createSinglePost = (post) => {
        if (post.type === myConst.typeImage) {
            return new ImagePost(post);
        } else if (post.type === myConst.typeText) {
            return new TextPost(post);
        } else if (post.type === myConst.typeVideo) {
            return new VideoPost(post);
        }

        return true;
    }

    getPostTemplate = (type, content, id = "default") => {
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
        } else if (type === "comment") {
            return {
                template: {
                    "body": content,
                    "postId": id
                },
                url: myConst.commentsPostUrl
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

    firstLetterIsUpperCase = (text) => {
        const firstLetter = text.charAt(0);

        return (firstLetter === firstLetter.toUpperCase());
    }

    isValidName = (text) => {
        return (this.firstLetterIsUpperCase(text) && (text.length < 31));
    }

    isValidEmail = (text) => {
        const re = /\S+@\S+\.\S+/;

        return re.test(text);
    }

    isValidPass = (text) => {
        const re = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;

        return re.test(text);
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

    createSingleUser = (user) => {
        return new Profile(user);
    }

    createUser = (user) => {
        return new User(user);
    }

    checkUrl = (type) => {
        if (type === "text") {
            return "TextPosts/";
        } else if (type === "image") {
            return "ImagePosts/";
        } else if (type === "video") {
            return "VideoPosts/";
        } else {
            return "Invalid Post type";
        }
    }

    formatDate = (date) => `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.`;

    formatTime = (date) => `${date.getHours()}:${date.getMinutes()}`;

    isSameDay = (date) => {
        const nowDate = new Date();

        return (this.formatDate(date) === this.formatDate(nowDate));
    }

    userNameContains = (user, valueToFind) => {
        const userFullName = user.name.toLowerCase();
        const value = valueToFind.toLowerCase();

        return userFullName.includes(value);
    }

    searchUsersByName = (users, valueToSearch) => {
        return users.filter(user => this.userNameContains(user, valueToSearch));
    }

    getSessionId = () => {
        return localStorage.getItem("sessionID");
    }

    setSessionId = (sessionId) => {
        localStorage.setItem("sessionID", sessionId);
    }

    checkIfAuth = () => {
        const sessionId = this.getSessionId();
        
        return (sessionId) ? true : false;
    }

    getOptions = () => {
        return {
            headers: {
                "Content-Type": "application/json",
                "Key": "7E47472",
                "SessionId": localStorage.getItem("sessionID")
            }
        }
    }
}

export const utils = new Utils();