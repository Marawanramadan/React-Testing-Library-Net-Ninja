import {render , screen ,fireEvent} from '@testing-library/react'
import AddInput from "../AddInput"

const mockedFn = jest.fn()
it("testing if value of input changes" ,()=>{
    render(<AddInput />)
    const inputField = screen.getByPlaceholderText("Add a new task here...")
    fireEvent.change(inputField , {target : {value : "Play Elden Ring" }})
    expect(inputField.value).toBe("Play Elden Ring")
})  

it("tests on click value returns to empty string" , ()=>{
    render(<AddInput todos={[]} setTodos={mockedFn} />)

    const addInput = screen.getByRole("button")
    const inputField = screen.getByPlaceholderText("Add a new task here...")

    fireEvent.click(addInput)
    expect(inputField.value).toBe("")
})

