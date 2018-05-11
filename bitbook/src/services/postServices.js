import axios from 'axios';

import { myConst } from '../shared/constants';
import { utils } from '../shared/utils';

class PostServices {
    getRequest = (prefix) => {
        return axios.get(myConst.BASE_END_POINT + prefix, utils.getOptions())
            .then(result => result.data);
    }

    createPostRequest = (type, content, id) => {
        const { url, template } = utils.getPostTemplate(type, content, id);

        return axios.post(url, template,  utils.getOptions()).then((res) => {
            return res;
        });
    }

    deletePostRequest = (id) => {
        return axios.delete(myConst.deletePostRequestUrl + id,  utils.getOptions())
            .then((res) => {
                return res;
            });
    }

    createPutRequest = (content) => {
        return axios.put(myConst.putRequestUrl, content,  utils.getOptions())
            .then((res) => {
                return res;
            });
    }

    createLoginRequest = (data) => {
        return axios.post(myConst.loginUrl, data, myConst.loginOptions)
            .then(res => res);
    }

    createRegisterRequest = (data) => {
        return axios.post(myConst.registerUrl, data, myConst.loginOptions)
            .then(res => res);
    }
}

export const postServices = new PostServices();