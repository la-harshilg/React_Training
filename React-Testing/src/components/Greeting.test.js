import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);
    //Act ..nothing
    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders React content as a text", () => {
    //Arrange
    render(<Greeting />);
    //Act ..nothing
    //Assert
    const reactContentElement = screen.getByText("react from scratch", {
      exact: false,
    });
    expect(reactContentElement).toBeInTheDocument();
  });

  test("renders Changed text when button is clicked", () => {
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const reactContentElement2 = screen.getByText("Text Changed", {
      exact: false,
    });
    expect(reactContentElement2).toBeInTheDocument();
  });

  test("does not renders react content when button is clicked", () => {
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const reactContentElement = screen.queryByText("react from scratch", {
      exact: false,
    });
    expect(reactContentElement).toBeNull();
  });
});
