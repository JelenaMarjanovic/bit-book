import axios from 'axios'
import { myConst } from '../shared/constants'
import { utils } from '../shared/utils';

class PostServices {

    getRequest = (prefix) => {

        return axios.get(myConst.BASE_END_POINT + prefix, myConst.options)
            .then(result => result.data)
    }

    createPostRequest = (type, content, id) => {

        const { url, template } = utils.getPostTemplate(type, content, id);
        return axios.post(url, template, myConst.options).then((res) => {
            return res
        })
    }

    deletePostRequest = (id) => {
        return axios.delete(myConst.deletePostRequestUrl + id, myConst.options)
            .then((res) => {
                return res
            })
    }

    createPutRequest = (content) => {
        return axios.put(myConst.putRequestUrl, content, myConst.options)
            .then((res) => {
                return res
            })
    }


}

export const postServices = new PostServices();