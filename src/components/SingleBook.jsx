import { Component } from "react"
import { Card } from "react-bootstrap"

class SingleBook extends Component {
  checkSelected = (asin) => (asin === this.props.valorediAsin ? "asin" : "")

  render() {
    return (
      <>
        <Card
          onClick={() => {
            this.props.cambiaAsin(this.props.book.asin)
          }}
          style={{
            border:
              this.props.book.asin === this.props.valoreDiAsin
                ? "3px solid red"
                : "none",
          }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SingleBook
