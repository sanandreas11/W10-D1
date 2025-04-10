import { Card } from "react-bootstrap"

const SingleBook = function (props) {
  return (
    <>
      <Card
        onClick={() => {
          props.cambiaAsin(props.book.asin)
        }}
        style={{
          border:
            props.book.asin === props.valoreDiAsin ? "3px solid red" : "none",
        }}
        data-testid="card"
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook
