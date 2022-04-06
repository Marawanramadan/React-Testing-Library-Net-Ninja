import {render , screen} from '@testing-library/react'
import Header from "../Header"

it("Header text" , ()=>{
    render(<Header title="My Header" />)
    const headingElement = screen.getByText(/my header/i)
    expect(headingElement).toBeInTheDocument()
})