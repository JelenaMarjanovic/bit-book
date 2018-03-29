import axios from 'axios'
import { myConst } from '../shared/constants'
import { utils } from '../shared/utils';

class PostServices {

    getRequest = (prefix) => {

        return axios.get(myConst.BASE_END_POINT + prefix, myConst.options)
            .then(result => result.data)
    }

    createPostRequest = (type, content) => {
        const { url, template } = utils.getPostTemplate(type, content);

        return axios.post(url, template, myConst.options).then((res) => {
            console.log(res);
        })
    }
}

export const postServices = new PostServices();