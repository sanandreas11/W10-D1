import { describe, it, expect } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import CommentArea from "../components/CommentArea"

describe("CommentArea testing", () => {
  it("mounts CommentArea correctly", () => {
    render(<CommentArea asin={""} />)
    const div = screen.getAllByTestId("comment-area")
    expect(div).toBeInTheDocument()
  })
  it("does not render any singlecomment initially", () => {
    render(<CommentArea asin={""} />)
    const allTheComments = screen.queryAllByTestId("single-comment")
    expect(allTheComments).toHaveLength(0)
  })
})
