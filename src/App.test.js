import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"

describe("Test the App Component", () => {
  test("header renders with react testing tutorial in the document", () => {
    const component = render(<App />)
    const linkElement = component.getByText(/This is React Testing Tutorial/i)
    expect(linkElement).toBeInTheDocument()
  })
  test("render login component in doucment", () => {
    const { getByLabelText } = render(<App />)
    const childElement = getByLabelText("Email")
    expect(childElement).toBeTruthy()
  })
  test("Test button click in the document", async () => {
    render(<App />)
    fireEvent.click(screen.getByText("Submit"))
    const items = screen.findAllByAltText(/Item #[0-9]: /)
    expect(items).toBeTruthy()
  })
})
