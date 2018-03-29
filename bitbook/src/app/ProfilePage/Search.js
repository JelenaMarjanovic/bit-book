import React from 'react'
import './Search.css'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: ""
        }
    }

    handleChange = (event) => {
        const {value} = event.target
        this.setState({ value: value});
    }

    componentDidUpdate(prevProps, prevState) {
        const { value: currentValue} = this.state;
        const { value: previousValue} = prevState;

        if (previousValue !== currentValue) {
            this.props.filterUsers(currentValue);
        }
    }

    resetChange = () => {
        this.setState({ value: "" });
    }

    render() {

        return (
            <form>
                <div className="input-field">
                    <input id="search" type="search"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Search users"
                        required />
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons" onClick={this.resetChange}>close</i>
                </div>
            </form>
        )
    }
}

export { Search }