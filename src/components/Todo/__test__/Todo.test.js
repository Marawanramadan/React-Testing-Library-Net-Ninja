import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockedTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const AddTask = (tasks) => {
  const addButton = screen.getByRole("button");
  const inputField = screen.getByPlaceholderText("Add a new task here...");
  tasks.forEach((task) => {
    fireEvent.change(inputField, { target: { value: task } });
    fireEvent.click(addButton);
  });
};

it("tests what happens when we press the add button", () => {
  render(<MockedTodo />);
  const addButton = screen.getByRole("button");
  const inputField = screen.getByPlaceholderText("Add a new task here...");
  fireEvent.change(inputField, { target: { value: "Play Elden Ring" } });
  fireEvent.click(addButton);
  const divElement = screen.getByText("Play Elden Ring");
  expect(divElement).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

it("tests what happens when we press the add more than one task", () => {
  render(<MockedTodo />);
  AddTask(["Study Testing" , "Apply Testing" , "Play Elden Ring"])
  const divElements = screen.getAllByTestId("task");
  expect(divElements.length).toBe(3);
});


const clickFunction = (elements) =>{
    elements.forEach(el =>{
        fireEvent.click(el)
        expect(el).toHaveClass("todo-item-active")
    })
}
it("tests what happens when we click on a task", () => {
    render(<MockedTodo />);
    AddTask(["Study Testing" , "Apply Testing" , "Play Elden Ring"])
    const divElements = screen.getAllByTestId("task");
    clickFunction(divElements)
    expect(divElements.length).toBe(3);
  });
  

