import axios from 'axios'
import { myConstants } from '../shared/constants'

class PostServices {

    getPosts = (prefix) => {
        const options = {
            headers:{
            "Content-Type": "application/json",
            "Key": "bitbook",
            "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
            }
        }
        return axios.get(myConstants.BASE_END_POINT + prefix, options)
            .then(result => result)
    }
}

export const postServices = new PostServices();