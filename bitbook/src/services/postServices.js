import axios from 'axios'
import { myConst } from '../shared/constants'
import { utils } from '../shared/utils';
class PostServices {

    getPosts = (prefix) => {

        return axios.get(myConst.BASE_END_POINT + prefix, myConst.options)
            .then(result => result.data)
    }

    createPostRequest = (type, content) => {


        const { url, template } = utils.getPostTemplate(type, content, myConst.options);
        axios.post(url, template).then((res) => {
            console.log(res);
        })
    }
}

export const postServices = new PostServices();