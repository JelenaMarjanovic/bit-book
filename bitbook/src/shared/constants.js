

class Constants {

    BASE_END_POINT = "http://bitbookapi.azurewebsites.net/api/";
    typeImage = "image";
    typeText = "text";
    typeVideo = "video";
    textPostUrl = this.BASE_END_POINT + 'TextPosts';
    imagePostUrl = this.BASE_END_POINT + 'ImagePosts';
    videoPostUrl = this.BASE_END_POINT + 'VideoPosts';
    commentsPostUrl = this.BASE_END_POINT + 'Comments'

    options = {
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbook",
            "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        }
    }
}

export const myConst = new Constants();