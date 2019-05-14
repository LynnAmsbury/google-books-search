import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";

class JumbotronContainer extends Component {
    render() {

        return(<Jumbotron>
            <h1>Search for a book to begin!</h1>
            <p>
              <Button variant="primary">Search Books</Button>
            </p>
            </Jumbotron>)
    }
}

export default JumbotronContainer;