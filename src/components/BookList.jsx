import { useState } from "react"
import SingleBook from "./SingleBook"
import { Col, Form, Row } from "react-bootstrap"
import CommentArea from "./CommentArea"

const BookList = function (props) {
  const [searchQuery, setSearchQuery] = useState("")
  const [asin, setAsin] = useState("")

  const handleAsin = (newAsin) => {
    setAsin(newAsin)
  }

  return (
    <>
      <Row>
        <Col>
          <Row className="justify-content-center mt-5">
            <Col xs={12} className="text-center">
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Cerca un libro"
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery({ searchQuery: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="g-2 mt-3">
            {props.books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={6} key={b.asin}>
                  <SingleBook
                    book={b}
                    cambiaAsin={handleAsin}
                    valoreDiAsin={asin}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col>
          <CommentArea asin={asin} data-testid="comments" />
        </Col>
      </Row>
    </>
  )
}

export default BookList
