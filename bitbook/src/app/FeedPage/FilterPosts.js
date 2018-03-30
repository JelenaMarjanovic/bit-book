import React, { Component } from 'react';
import M from "materialize-css"


class FilterPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            instance: {},
            filterTitle: "All posts"
        }
    }

    componentDidMount() {
        const elem = document.querySelector('#filterPosts');
        M.Dropdown.init(elem);

    }

    getValueAndSetState = (event) => {
        const value = (event.target.innerHTML).toLowerCase();
        const filterTitle = `${value} posts`;

        this.setState({
            filterTitle: filterTitle
        })
        this.props.handleState(value);
    }


    render() {
        const { filterTitle } = this.state;

        return (
            <div>
                <a id="filterPosts" className='dropdown-trigger btn light-blue accent-3 right myDropDownButton'
                    data-target='dropdown1' >{filterTitle}</a>

                <ul id='dropdown1' className='dropdown-content myDropDownList'>
                    <li className="light-blue-text text-accent-3" onClick={this.getValueAndSetState}>All</li>
                    <li className="light-blue-text text-accent-3" onClick={this.getValueAndSetState}>Text</li>
                    <li className="light-blue-text text-accent-3" onClick={this.getValueAndSetState}>Image</li>
                    <li className="light-blue-text text-accent-3" onClick={this.getValueAndSetState}>Video</li>
                </ul>
            </div>
        );
    }
}

export { FilterPosts };