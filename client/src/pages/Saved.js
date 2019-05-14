import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
import Row from 'react-bootstrap/Row'
// import Col from "../components/Grid/col";
// import Row from "../components/Grid/row";
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
// import Container from "../components/Grid/index";
import List from "../components/List";

class Saved extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        API.getSavedBooks()
        .then( (res) => this.setState ({
            books: res.data
        })
        ) 
        .catch(err=>console.log(err))
    }

    handleBookDelete = id => {
        API.deleteBook(id).then(() => API.getSavedBooks()
        .then( (res) => this.setState ({
            books: res.data
        }))
        .catch(err=>console.log(err))
        )};
    
    render() {
        return (<div>
            {this.state.books.map((book) => {
                console.log(book);
                return <Book
                key={book.id}
                title={book.title}
                subtitle={book.subtitle}
                link={book.link}
                authors={book.authors.join(", ")}
                description={book.description}
                image={book.thumbnail}
                Button={() => (
                  <button
                    onClick={() => this.handleBookDelete(book._id)}
                    className="btn btn-primary ml-2"
                  >
                    Delete
                  </button>

                )}
              />
            })}
        </div>)
    }
}

export default Saved;