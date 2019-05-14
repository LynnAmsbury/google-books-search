import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class SearchForm extends Component {
    render() {
        return (<Form onSubmit={this.props.handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control onChange={this.props.handleInputChange} type="text" placeholder="Enter Search" />
              {/* <Form.Text className="text-muted">
                
              </Form.Text> */}
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>)

        return(<form >
            <label>Search<input type="text" onChange={this.props.handleInputChange} /></label>
            <input type="submit"/>
        </form>)
    }
}

export default SearchForm;