import React from 'react'
import M from "materialize-css"

import {NewTextPost} from './NewTextPost'
import {NewVideoPost} from './NewVideoPost'
import {NewImagePost} from './NewImagePost'


class CreatePost extends React.Component {

    componentDidMount() {
        const elem = document.querySelector('.fixed-action-btn');
        M.FloatingActionButton.init(elem, {
            hoverEnabled: false
        });
    }

    componentWillUnmount() {

    }

    newPost = (e) => {
        const ID = e.target.id;
        const elem = document.querySelector(`#modal${ID}`);
        const instance = M.Modal.init(elem);
        instance.open()
    }


    render() {

        return (
            <React.Fragment>
                <NewTextPost />
                <NewVideoPost />
                <NewImagePost />
                <div className="fixed-action-btn click-to-toggle">
                    <a className="btn-floating btn-large red">
                        <i className="large material-icons">add</i>
                    </a>
                    <ul>
                        <li onClick={this.newPost}><a className="btn-floating red"><i id="Text" className="material-icons">format_color_text</i></a></li>
                        <li onClick={this.newPost}><a className="btn-floating green"><i id="Image" className="material-icons">image</i></a></li>
                        <li onClick={this.newPost}><a className="btn-floating blue"><i id="Video" className="material-icons">ondemand_video</i></a></li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export { CreatePost }