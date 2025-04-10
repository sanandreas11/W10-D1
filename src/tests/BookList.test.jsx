import { describe, it, expect } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import BookList from "../components/BookList"
import CommentArea from "../components/CommentArea"
import fantasy from "../data/fantasy.json"
//150 libri

describe("Booklist testing", () => {
  it("renders all books correctly", () => {
    render(<BookList books={fantasy} />)
    const renderedBooks = screen.getAllByRole("img")
    expect(renderedBooks).toHaveLength(150)
  })
  it("renders 3 cards searching for witcher", () => {
    render(<BookList books={fantasy} />)
    const filterInput = screen.getByPlaceholderText("Cerca un libro")
    fireEvent.change(filterInput, { target: { value: "witcher" } })
    expect(filterInput.length).toHaveLength(3)
  })
  it("clicking a book sets its border to red", () => {
    render(<BookList books={fantasy} />)
    const allTheCards = screen.getAllByTestId("card")
    fireEvent.click(allTheCards[0])
    expect(allTheCards[0]).toHaveStyle("border:3px solid red")
  })
  it("clicking a second book sets its border to normal", () => {
    render(<BookList books={fantasy} />)
    const allTheCards = screen.getAllByTestId("card")
    fireEvent.click(allTheCards[0])
    fireEvent.click(allTheCards[1])
    expect(allTheCards[0]).toHaveStyle("border:none")
  })
  it("renders single comments after clicking on a popular book", async () => {
    render(<BookList books={fantasy} />)
    const allTheCards = screen.getAllByTestId("card")
    fireEvent.click(allTheCards[0])
    const allTheComments = await screen.findAllByTestId("single-comment")
    expect(allTheComments.length).toBeGreaterThan(0)
  })
})
