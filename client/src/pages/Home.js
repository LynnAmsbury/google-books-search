import React, { Component } from "react";
import { Jumbotron } from 'react-bootstrap'
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "react-bootstrap";
// import Row from 'react-bootstrap/Row'
// import Col from "../components/Grid/col";
// import Row from "../components/Grid/row";
// import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'
// import Container from "../components/Grid/index";
import List from "../components/List";

class Home extends Component {
  state = {
    books: [],
    q: "",
    // message: "Search For A Book To Begin!"
  };

  handleInputChange = event => {
    const { value } = event.target;
    console.log(value);
    this.setState({
      q: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks())
    .catch(err=>console.log(err))
  };

  render() {
    // return(
    //   <Form
    //             handleInputChange={this.handleInputChange}
    //             handleFormSubmit={this.handleFormSubmit}
    //             q={this.state.q}
    //           />
    // )
    return (
      <Container>
            <Jumbotron>
              <h1 className="text-center">
                <strong>Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Jumbotron>
          
            {/* <Card title="Book Search" icon="far fa-book"> */}
              
            {/* </Card> */}
          
       
        <Row>
          <Col size="md-12">
            {/* <Card title="Results"> */}
              {this.state.books.length ? (
               
                  this.state.books.map(book => (
                    <Book
                      key={book.id}
                      id={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      handleBookDelete = {this.handleBookDelete}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))
                
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            {/* </Card> */}
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;