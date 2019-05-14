import React, { Component } from "react";
import {Card} from "react-bootstrap";
class Book extends Component {
    render() {
        return(<Card>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.subtitle}</Card.Subtitle>
          <div>{this.props.authors}</div>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Card.Link href={this.props.link}>View Page</Card.Link>
          {this.props.Button()}
        </Card.Body>
      </Card>)
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