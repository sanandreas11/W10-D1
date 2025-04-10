import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Welcome from "../components/Welcome"

describe("Welcome testing", () => {
  it("mounts the title correctly", () => {
    render(<Welcome />)

    const text = screen.getByText(/Benvenuti in EpiBooks!/i)
    expect(text).toBeInTheDocument()
  })
})
