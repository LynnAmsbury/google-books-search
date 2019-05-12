import React, { Component } from "react";

class Book extends Component {
    render() {

        return(<div>
            <p>{this.props.title}</p>
            <p>{this.props.subtitle}</p>
            <p>{this.props.authors}</p>
            <p>{this.props.description}</p>
            <p>{this.props.title}</p>
            <a href={this.props.link}>Click here for link</a>
            <img src={this.props.image} />
            {this.props.Button()}
        </div>)
    }
}

export default Book;