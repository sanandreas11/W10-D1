import { Component, useState } from "react"
import { Button, Form } from "react-bootstrap"

const AddComment = function (props) {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: props.asin,
  })

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment.comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMmNlODM4MzRiZjAwMTUwMDA3MDQiLCJpYXQiOjE3NDQwMjc4MDgsImV4cCI6MTc0NTIzNzQwOH0.u3OdyDjENyu2QS8CSKg8cjEXQXQ-DPONni0n2QqWlkg",
          },
        }
      )
      if (response.ok) {
        alert("Recensione inviata!")
        setComment({
          comment: "",
          rate: 1,
          elementId: props.asin,
        })
      } else {
        throw new Error("Qualcosa è andato storto")
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                comment: {
                  ...comment,
                  rate: e.target.value,
                },
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  )
}

export default AddComment
