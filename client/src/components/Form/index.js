import React, { Component } from "react";

class SearchForm extends Component {
    render() {

        return(<form onSubmit={this.props.handleFormSubmit}>
            <label>Search<input type="text" onChange={this.props.handleInputChange} /></label>
            <input type="submit"/>
        </form>)
    }
}

export default SearchForm;