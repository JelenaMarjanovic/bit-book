import React from 'react'
import M from "materialize-css"

import { NewTextPost } from './NewTextPost'
import { NewVideoPost } from './NewVideoPost'
import { NewImagePost } from './NewImagePost'


class CreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeModal: null,
        }
    }

    componentDidMount() {
        const elem = document.querySelector('.fixed-action-btn');
        M.FloatingActionButton.init(elem, {
            hoverEnabled: false
        });
    }

    newPost = (e) => {
        const ID = e.target.id;
        const elem = document.querySelector(`#modal${ID}`);
        const instance = M.Modal.init(elem);
        instance.open();
        this.setState({ activeModal: instance })
    }


    render() {
        const { reload } = this.props
        const { activeModal } = this.state
        return (
            <React.Fragment>
                <NewTextPost reload={reload} modalInstance={activeModal} />
                <NewVideoPost reload={reload} modalInstance={activeModal} />
                <NewImagePost reload={reload} modalInstance={activeModal} />
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