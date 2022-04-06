import { screen, render } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};
it("Tests number of items", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={2} />);
  const numberElement = screen.getByText(/2 tasks left/i);
  expect(numberElement).toBeInTheDocument();
});

it("render task when number of incomplete tasks is 1", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const numberElement = screen.getByText(/1 task left/i);
    expect(numberElement).toBeInTheDocument();
  });

  it("render task when number of incomplete tasks is 2", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const numberElement = screen.getByTestId("para");
    expect(numberElement.textContent).toBe("2 tasks left");
  });
  

